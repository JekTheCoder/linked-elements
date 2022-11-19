import { Injectable } from '@angular/core';
import { BaseScrollStrategy } from './base-scroll-strategy';

@Injectable()
export class SmoothScrollStrategy implements BaseScrollStrategy {
	scrollIntoView(element: HTMLElement): void {
		element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}
}
