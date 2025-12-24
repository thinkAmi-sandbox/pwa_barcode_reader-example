type BarcodeFormat =
	| "aztec"
	| "code_128"
	| "code_39"
	| "code_93"
	| "codabar"
	| "data_matrix"
	| "ean_13"
	| "ean_8"
	| "itf"
	| "pdf417"
	| "qr_code"
	| "upc_a"
	| "upc_e";

interface BarcodeDetectorOptions {
	formats?: BarcodeFormat[];
}

interface DetectedBarcode {
	rawValue: string;
	format: BarcodeFormat;
}

declare class BarcodeDetector {
	constructor(options?: BarcodeDetectorOptions);
	static getSupportedFormats(): Promise<BarcodeFormat[]>;
	detect(source: ImageBitmapSource): Promise<DetectedBarcode[]>;
}
