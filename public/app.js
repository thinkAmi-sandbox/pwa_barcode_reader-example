"use strict";
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resultText = document.getElementById("result");
const offlineText = document.getElementById("offline");
const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const previewFrame = document.getElementById("preview-frame");
const clearButton = document.getElementById("clear");
let stream = null;
let detector = null;
let scanning = false;
let lastValue = "";
let lastRegionKey = "";
const canvas = document.createElement("canvas");
const canvasContext = canvas.getContext("2d");
const setResult = (value) => {
	resultText.textContent = value || "未検出";
};
const setOffline = (isOffline) => {
	offlineText.style.display = isOffline ? "block" : "none";
	startButton.disabled = isOffline;
};
const isScannerSupported = () => {
	return "BarcodeDetector" in window && !!navigator.mediaDevices;
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const updateOfflineState = () => {
	setOffline(!navigator.onLine);
};
const updatePreviewAspect = () => {
	const videoWidth = video.videoWidth;
	const videoHeight = video.videoHeight;
	if (!videoWidth || !videoHeight) {
		return;
	}
	const ratio = (videoWidth / videoHeight).toFixed(4);
	previewFrame.style.aspectRatio = ratio;
};
const stopScan = async () => {
	scanning = false;
	stopButton.disabled = true;
	startButton.disabled = false;
	lastRegionKey = "";
	video.pause();
	video.srcObject = null;
	if (stream) {
		stream.getTracks().forEach((track) => {
			track.stop();
		});
		stream = null;
	}
};
const clearResult = () => {
	lastValue = "";
	setResult("");
};
const getScanRegion = () => {
	const videoWidth = video.videoWidth;
	const videoHeight = video.videoHeight;
	if (!videoWidth || !videoHeight) {
		return null;
	}
	const videoRect = video.getBoundingClientRect();
	const overlayRect = overlay.getBoundingClientRect();
	if (videoRect.width === 0 || videoRect.height === 0) {
		return null;
	}
	const scale = Math.min(
		videoRect.width / videoWidth,
		videoRect.height / videoHeight,
	);
	const displayWidth = videoWidth * scale;
	const displayHeight = videoHeight * scale;
	const offsetX = (videoRect.width - displayWidth) / 2;
	const offsetY = (videoRect.height - displayHeight) / 2;
	const displayLeft = videoRect.left + offsetX;
	const displayTop = videoRect.top + offsetY;
	const overlayLeft = overlayRect.left - displayLeft;
	const overlayTop = overlayRect.top - displayTop;
	const overlayWidth = overlayRect.width;
	const overlayHeight = overlayRect.height;
	const clipLeft = Math.max(0, overlayLeft);
	const clipTop = Math.max(0, overlayTop);
	const clipRight = Math.min(displayWidth, overlayLeft + overlayWidth);
	const clipBottom = Math.min(displayHeight, overlayTop + overlayHeight);
	const clipWidth = clipRight - clipLeft;
	const clipHeight = clipBottom - clipTop;
	if (clipWidth <= 0 || clipHeight <= 0) {
		return null;
	}
	const rawX = clipLeft / scale;
	const rawY = clipTop / scale;
	const rawWidth = clipWidth / scale;
	const rawHeight = clipHeight / scale;
	const sx = Math.max(0, Math.min(rawX, videoWidth));
	const sy = Math.max(0, Math.min(rawY, videoHeight));
	const sw = Math.max(1, Math.min(rawWidth, videoWidth - sx));
	const sh = Math.max(1, Math.min(rawHeight, videoHeight - sy));
	return { sx, sy, sw, sh };
};
const drawScanFrame = () => {
	if (!canvasContext) {
		return null;
	}
	const region = getScanRegion();
	if (!region) {
		return null;
	}
	const { sx, sy, sw, sh } = region;
	const width = Math.floor(sw);
	const height = Math.floor(sh);
	const regionKey = `${width}x${height}`;
	if (regionKey !== lastRegionKey) {
		canvas.width = width;
		canvas.height = height;
		lastRegionKey = regionKey;
	}
	canvasContext.drawImage(video, sx, sy, sw, sh, 0, 0, width, height);
	return canvas;
};
const scanLoop = async () => {
	while (scanning && detector) {
		try {
			// メディアの準備状態から、検出に使うフレームが取得できるようになっていることを確認
			// 2は、HTMLMediaElement.HAVE_CURRENT_DATAを意味する
			// https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/readyState
			if (video.readyState < 2) {
				await sleep(150);
				continue;
			}
			const frame = drawScanFrame();
			if (!frame) {
				await sleep(150);
				continue;
			}
			const barcodes = await detector.detect(frame);
			if (barcodes.length > 0) {
				const value = barcodes[0].rawValue || "";
				if (value && value !== lastValue) {
					lastValue = value;
					setResult(value);
				}
			}
		} catch {
			// 読み取り失敗時は無視して次フレームへ進む
		}
		await sleep(150);
	}
};
const startScan = async () => {
	if (!isScannerSupported()) {
		return;
	}
	if (!navigator.onLine) {
		return;
	}
	startButton.disabled = true;
	stopButton.disabled = false;
	try {
		stream = await navigator.mediaDevices.getUserMedia({
			video: {
				facingMode: { ideal: "environment" },
				aspectRatio: { ideal: 4 / 3 },
			},
			audio: false,
		});
		video.srcObject = stream;
		video.addEventListener("loadedmetadata", updatePreviewAspect, {
			once: true,
		});
		await video.play();
		// loadedmetadata の発火タイミングが環境差でズレる可能性があるため、
		// イベントと即時実行の両方で確実に反映するための保険としてupdatePreviewAspect()を実行
		updatePreviewAspect();
		detector = new BarcodeDetector({
			formats: ["qr_code", "ean_13"],
		});
		scanning = true;
		scanLoop();
	} catch {
		startButton.disabled = false;
		stopButton.disabled = true;
	}
};
const init = () => {
	if (!isScannerSupported()) {
		startButton.disabled = true;
	}
	updateOfflineState();
	window.addEventListener("online", updateOfflineState);
	window.addEventListener("offline", updateOfflineState);
	startButton.addEventListener("click", startScan);
	stopButton.addEventListener("click", stopScan);
	clearButton.addEventListener("click", clearResult);
};
init();
