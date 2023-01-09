import {
	PropButton,
	HighlightElement,
} from '../infrastruture/interfaces/copy_paste_code';

const locales: Record<string, string[]> = {
	en: ['Copy', 'Copied!', 'Copied to clipboard'],
	es: ['Copiar', 'Copiado!', 'Copiado al portapapeles'],
	fr: ['Copier', 'Copié!', 'Copié dans le presse-papier'],
	de: ['Kopieren', 'Kopiert!', 'In die Zwischenablage kopiert'],
	ja: ['コピー', 'コピーしました！', 'クリップボードにコピーしました'],
	ko: ['복사', '복사됨!', '클립보드에 복사됨'],
	ru: ['Копировать', 'Скопировано!', 'Скопировано в буфер обмена'],
	zh: ['复制', '已复制!', '已复制到剪贴板'],
	'zh-tw': ['複製', '已複製!', '已複製到剪貼簿'],
};

export class CopyPasteCode {
	constructor(options: PropButton = {}) {
		(self as any).lang =
			options.lang || document.documentElement.lang || 'en';
	}

	'after:highlightElement'({ el, text }: HighlightElement) {
		const isBlockExist = el.parentElement.classList.contains('block-code');

		if (isBlockExist) return;

		el.parentElement.classList.add('block-code');

		const currentLang = (self as any).lang;

		let button = Object.assign(document.createElement('button'), {
			innerHTML: (locales as any)[(self as any).lang]?.[0] || 'Copy',
			className: 'copy-paste',
		});

		el.insertAdjacentElement('beforeBegin', button);

		button.onclick = function () {
			if (!navigator.clipboard) return;

			navigator.clipboard.writeText(text);

			button.innerHTML = locales[currentLang]?.[1] || locales.en[1];

			setTimeout(() => {
				button.innerHTML = locales[currentLang]?.[0] || locales.en[0];
			}, 2000);
		};
	}
}
