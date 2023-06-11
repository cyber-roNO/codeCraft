<script>
	import '../global.css';
	import dogStart from '$lib/images/dog-start.png';
	import dogHouse from '$lib/images/dogHouse.png';
	import { afterUpdate } from 'svelte';
	let strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let isCorrect = false;
	/**
	 * @type {HTMLSpanElement}
	 */
	let dogHouseElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let dogStartElement;

	let questions = [
		{
			options: ['justify-content:flex-end'],
			correctOptions: ['justify-content:flex-end']
		},
		{
			options: [''],
			correctOptions: ['align-items:flex-end']
		},
		{
			options: ['', ''],
			correctOptions: ['align-items:center', 'justify-content:center']
		}
	];
	let answers = new Array(questions.length).fill(null);
	let questionPointer = 0;
	afterUpdate(() => {
		if (
			dogHouseElement.getBoundingClientRect().x == dogStartElement.getBoundingClientRect().x &&
			dogHouseElement.getBoundingClientRect().y == dogStartElement.getBoundingClientRect().y
		) {
			isCorrect = true;
		} else {
			isCorrect = false;
		}
	});
</script>

<svelte:head>
	<title>codeCraft</title>
	<meta name="description" content="codeCraft app" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Source+Code+Pro&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	{#if questionPointer == -1}
		<div class="editor-wrapper"><button on:click={() => (questionPointer = 0)}>start</button></div>
	{:else if !(questionPointer > answers.length - 1)}
		<div class="editor-wrapper">
			<p>
				Help all three frogs find their lilypads just by using justify-content. This time, the
				lilypads have lots of space all around them.
			</p>
			<div class="editor">
				<div class="editor-strokes">
					{#each strokes as item}
						<span>
							{item}
						</span>
					{/each}
				</div>
				<div class="editor-area">
					<p>#content <span class="bracket">{'{'}</span></p>
					<p class="margin-l red"><span class="blue">display:</span> flex;</p>
					{#each questions[questionPointer].options as option}
						<input class="editor-input margin-l" type="text" bind:value={option} />
					{/each}

					<p class="bracket">{'}'}</p>
					<button
						class="editor-button"
						disabled={!isCorrect}
						on:click={() => {
							questionPointer++;
						}}>Next</button
					>
				</div>
			</div>
		</div>
	{:else}
		<div class="editor-wrapper">end</div>
	{/if}

	<div class="view">
		<div class="background" style={questions[questionPointer].correctOptions?.join(';')}>
			<span bind:this={dogHouseElement} class="img-wrapper doggy-house"
				><img src={dogHouse} alt="doggy-house" /></span
			>
		</div>
		<div class="grass" style={questions[questionPointer].options.join(';')} id="content">
			<span bind:this={dogStartElement} class="img-wrapper doggy"
				><img src={dogStart} alt="doggy" /></span
			>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.6rem;
	}
	.editor-wrapper {
		height: 100vh;
		width: 50%;
		color: white;
		padding: 2rem;
	}
	.editor {
		display: flex;
		font-family: 'Source Code Pro', monospace;
		background: #2f2f2f;
		padding: 1rem;
	}
	.editor-strokes {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: #c3c3c3;
		padding: 1rem;
	}
	.editor-area {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: #f7f6bc;
		padding: 1rem 0.5rem;
		width: 100%;
		letter-spacing: 0.2rem;
		position: relative;
		margin-left: 2rem;
	}
	.editor-input {
		border: none;
		outline: none;
		height: 2rem;
		font-size: 1.6rem;
		font-family: 'Source Code Pro', monospace;
		letter-spacing: 0.2rem;
		background: #404040;
		color: white;
	}
	.editor-button {
		position: absolute;
		right: 1.5rem;
		bottom: 1.5rem;
		font-size: 1.6rem;
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		border: none;
		color: white;
		background: #489d48;
		cursor: pointer;
		font-family: 'Source Code Pro', monospace;
	}
	.editor-button:disabled {
		opacity: 0.5;
	}

	.view {
		height: 100vh;
		width: 50vw;
		background: #489d48;
		position: relative;
	}
	.background,
	.grass {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1em;
	}
	.background {
		z-index: 10;
	}
	.grass {
		z-index: 20;
	}
	.img-wrapper {
		display: block;
		position: relative;
		width: 20rem;
		height: 20rem;
	}
	.img-wrapper img {
		width: 100%;
		height: 100%;
	}
	.doggy img {
		transform: scale(0.8);
		margin-top: 25px;
	}
	.margin-l {
		margin-left: 3rem;
	}
	.bracket {
		color: yellow;
	}
	.blue {
		color: #569cd6;
	}
	.red {
		color: #ce9178;
	}
</style>
