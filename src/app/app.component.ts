import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IEDirectives, IEFit } from "@imageengine/imageengine-helpers";

const OPTIONS = [
    [1920, 920],
    [960, 460],
    [480, 230],
    [240, 115]
];

const FITS: IEFit[] = [
    "stretch",
    "box",
    "letterbox",
    "cropbox"
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
    image_path: string = "ie-loader-images/h-lightbox-3.jpeg";
    sizes: number[][] = [...OPTIONS];
    size: number = 3;
    fits: IEFit[] = [...FITS];
    fit: IEFit = "cropbox";
    width: string = `${OPTIONS[3][0]}px`;
    height: string = `${OPTIONS[3][1]}px`;
    src_url: string | null = "";

    constructor(private change_detector: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
	this.set_src_url();
    }
    
    change_size(new_val: number): void {
	this.size = new_val;
	this.width = `${this.sizes[new_val][0]}px`;
	this.height = `${this.sizes[new_val][1]}px`;
	this.change_detector.detectChanges();
	this.set_src_url();
    }

    change_fit(new_val: IEFit): void {
	this.fit = new_val;
	this.change_detector.detectChanges();
	this.set_src_url();
    }

    set_src_url() {
	let img = document.querySelector(".ngx-ie-image");
	if (img) {
	    this.src_url = img.getAttribute("src");
	    this.change_detector.detectChanges();
	}
    }
}
