/** @param {string} content */
export function replace_placeholders(content) {
	return content
}

/**
 * @param {string} code
 * @param {string} lang
 */
function fence(code, lang = 'dts') {
	return '\n\n```' + lang + '\n' + code + '\n```\n\n';
}

/**
 * @param {import('./types').Type} member
 */
function stringify(member) {
	const bullet_block =
		member.bullets.length > 0
			? `\n\n<div class="ts-block-property-bullets">\n\n${member.bullets.join('\n')}</div>`
			: '';

	const child_block =
		member.children.length > 0
			? `\n\n<div class="ts-block-property-children">${member.children
					.map(stringify)
					.join('\n')}</div>`
			: '';

	return (
		`<div class="ts-block-property">${fence(member.snippet)}` +
		`<div class="ts-block-property-details">\n\n` +
		bullet_block +
		'\n\n' +
		member.comment
			.replace(/\/\/\/ type: (.+)/g, '/** @type {$1} */')
			.replace(/^(  )+/gm, (match, spaces) => {
				return '\t'.repeat(match.length / 2);
			}) +
		child_block +
		'\n</div></div>'
	);
}
