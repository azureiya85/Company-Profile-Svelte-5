import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Clash Grotesk, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Clash Display, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '9999px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #45496a
		'--color-primary-50': '227 228 233', // #e3e4e9
		'--color-primary-100': '218 219 225', // #dadbe1
		'--color-primary-200': '209 210 218', // #d1d2da
		'--color-primary-300': '181 182 195', // #b5b6c3
		'--color-primary-400': '125 128 151', // #7d8097
		'--color-primary-500': '69 73 106', // #45496a
		'--color-primary-600': '62 66 95', // #3e425f
		'--color-primary-700': '52 55 80', // #343750
		'--color-primary-800': '41 44 64', // #292c40
		'--color-primary-900': '34 36 52', // #222434
		// secondary | #F8B195
		'--color-secondary-50': '254 243 239', // #FEF3EF
		'--color-secondary-100': '253 239 234', // #FDEFEA
		'--color-secondary-200': '253 236 229', // #FDECE5
		'--color-secondary-300': '252 224 215', // #FCE0D7
		'--color-secondary-400': '250 201 186', // #FAC9BA
		'--color-secondary-500': '248 177 149', // #F8B195
		'--color-secondary-600': '223 159 134', // #DF9F86
		'--color-secondary-700': '186 133 112', // #BA8570
		'--color-secondary-800': '149 106 90', // #956A5A
		'--color-secondary-900': '122 87 73', // #7A5749

		// tertiary | #b2a1e3
		'--color-tertiary-50': '243 241 252', // #f3f1fc
		'--color-tertiary-100': '237 234 250', // #edeafa
		'--color-tertiary-200': '230 227 248', // #e6e3f8
		'--color-tertiary-300': '211 206 243', // #d3cef3
		'--color-tertiary-400': '172 164 233', // #aca4e9
		'--color-tertiary-500': '178 161 227', // #b2a1e3
		'--color-tertiary-600': '148 134 192', // #9486c0
		'--color-tertiary-700': '124 112 160', // #7c70a0
		'--color-tertiary-800': '99 89 128', // #635980
		'--color-tertiary-900': '81 72 103', // #514867

		// success |  #3a9d7a
		'--color-success-50': '222 241 236', // #def1ec
		'--color-success-100': '207 234 226', // #cfeae2
		'--color-success-200': '179 221 208', // #b3ddd0
		'--color-success-300': '137 198 179', // #89c6b3
		'--color-success-400': '95 175 150', // #5faf96
		'--color-success-500': '58 157 122', // #3a9d7a
		'--color-success-600': '52 141 110', // #348d6e
		'--color-success-700': '44 117 91', // #2c755b
		'--color-success-800': '35 94 73', // #235e49
		'--color-success-900': '29 77 60', // #1d4d3c

		// warning | #e4874c
		'--color-warning-50': '251 237 228', // #fbede4
		'--color-warning-100': '250 231 219', // #fae7db
		'--color-warning-200': '248 225 210', // #f8e1d2
		'--color-warning-300': '244 207 183', // #f4cfb7
		'--color-warning-400': '236 171 130', // #ecab82
		'--color-warning-500': '228 135 76', // #e4874c
		'--color-warning-600': '205 122 68', // #cd7a44
		'--color-warning-700': '171 101 57', // #ab6539
		'--color-warning-800': '137 81 46', // #89512e
		'--color-warning-900': '112 66 37', // #704225

		// error | #c44b4b
		'--color-error-50': '250 228 228', // #fae4e4
		'--color-error-100': '247 213 213', // #f7d5d5
		'--color-error-200': '241 181 181', // #f1b5b5
		'--color-error-300': '229 138 138', // #e58a8a
		'--color-error-400': '209 92 92', // #d15c5c
		'--color-error-500': '196 75 75', // #c44b4b
		'--color-error-600': '176 67 67', // #b04343
		'--color-error-700': '147 56 56', // #933838
		'--color-error-800': '118 45 45', // #762d2d
		'--color-error-900': '96 37 37', // #602525

		// surface | #A4A8B7
		'--color-surface-50': '238 239 244', // #EEF0F4
		'--color-surface-100': '230 231 238', // #E6E7EE
		'--color-surface-200': '223 224 233', // #DFE0E9
		'--color-surface-300': '203 205 220', // #CBCDDC
		'--color-surface-400': '164 168 183', // #A4A8B7
		'--color-surface-500': '125 130 145', // #7D8291
		'--color-surface-600': '113 117 130', // #717582
		'--color-surface-700': '94 98 109', // #5E626D
		'--color-surface-800': '75 78 88', // #4B4E58
		'--color-surface-900': '61 64 72' // #3D4048
	}
};
