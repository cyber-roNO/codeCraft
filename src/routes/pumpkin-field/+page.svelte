<script lang="ts">
	import '../../global.css';

	import { questions, finalText } from '../../constants/ground/questions';
	import { pointerGridGround } from '../../stores/pointer';
	import { afterUpdate } from 'svelte';

	import groundCell from '$lib/images/ground/ground-cell.png';
	import pumpkinCell from '$lib/images/ground/pumpkin-cell.png';
	import aquaCell from '$lib/images/ground/aqua-cell.png';
	let isCorrect = false;
	const strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let answers = new Array(questions.length).fill(null);
	let aquaItem: HTMLSpanElement;
	let pumpkinItem: HTMLSpanElement;

	afterUpdate(() => {
		const aquaItemData = {
			x: Math.round(aquaItem?.getBoundingClientRect().x | 1),
			y: Math.round(aquaItem?.getBoundingClientRect().y | 1),
			w: aquaItem?.getBoundingClientRect().width,
			h: aquaItem?.getBoundingClientRect().height
		};

		const pumpkinItemData = {
			x: Math.round(pumpkinItem?.getBoundingClientRect().x | 1),
			y: Math.round(pumpkinItem?.getBoundingClientRect().y | 1),
			w: pumpkinItem?.getBoundingClientRect().width,
			h: pumpkinItem?.getBoundingClientRect().height
		};

		if (JSON.stringify(aquaItemData) === JSON.stringify(pumpkinItemData)) {
			isCorrect = true;
		} else {
			isCorrect = false;
		}
	});
</script>

<svelte:head>
	<title>Pumpkin Field</title>
	<meta
		name="description"
		content="Pumpkin Field - это игра, в которых ты сможешь обучиться веб-технологии css-grid"
	/>
	<meta name="keywords" content="flexbox, game, css, transform" />
	<meta name="author" content="Roman Novikov" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Pumpkin Field" />
	<meta property="og:title" content="Pumpkin Field" />
	<meta
		property="og:description"
		content="Pumpkin Field - это игра, в которых ты сможешь обучиться веб-технологии css-grid"
	/>
	<meta property="og:locale" content="ru_RU" />
	<meta
		property="og:image"
		content="https://code-craft-five.vercel.app/_app/immutable/assets/dog-johnny.28c5c7ba.png"
	/>
	<meta property="og:image:width" content="968" />
	<meta property="og:image:height" content="504" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	{#if !($pointerGridGround > answers.length - 1)}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">PUMPKIN FIELD</h1>
				<div class="editor-logo-arrows">
					<button
						disabled={$pointerGridGround == 0}
						on:click={() => {
							+$pointerGridGround--;
						}}>{'<'}</button
					>
					<p>УРОВЕНЬ</p>
					<span class="editor-counter-mobile">{+$pointerGridGround + 1}/{answers.length}</span>
					<button
						on:click={() => {
							+$pointerGridGround++;
						}}>{'>'}</button
					>
				</div>
			</div>

			<p class="editor-text">{questions[$pointerGridGround].content}</p>
			<div class="editor shake">
				<div class="editor-strokes">
					{#each strokes as item}
						<span>
							{item}
						</span>
					{/each}
				</div>
				<div class="editor-area">
					<p>#ground <span class="bracket">{'{'}</span></p>
					<p class="margin-l red">
						<span class="blue">display:</span> grid;
					</p>
					<p class="margin-l red">
						<span class="blue">grid-template-rows:</span>{'\n'}repeat(5, 20%);
					</p>
					<p class="margin-l red">
						<span class="blue">grid-template-columns:</span>{'\n'}repeat(5, 20%);
					</p>
					<p class="bracket">{'}'}</p>
					<p>#aqua <span class="bracket">{'{'}</span></p>
					{#each questions[$pointerGridGround].optionAnswers as item}
						<p class="margin-l red">
							<span class="blue">{item.split(':')[0]}:</span>
							{item.split(':')[1]};
						</p>
					{/each}
					<input
						class="editor-input margin-l"
						type="text"
						bind:value={questions[$pointerGridGround].option}
					/>
					<p class="bracket">{'}'}</p>
					<button
						class="editor-button"
						disabled={!isCorrect}
						on:click={() => {
							+$pointerGridGround++;
						}}
					>
						Следующий
					</button>
				</div>
			</div>

			<span class="editor-counter">{+$pointerGridGround + 1}/{answers.length}</span>
		</div>
	{:else}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">Pumpkin Field</h1>
			</div>
			<p class="editor-text">
				{finalText}
			</p>
			<div class="buttons">
				<a href="/" class="link"> На главную </a>
				<button
					class="editor-button button-end"
					on:click={() => {
						$pointerGridGround = 0;
					}}>Играть снова</button
				>
			</div>
		</div>
	{/if}
	<div class="view-wrapper">
		<div class="view">
			<div class="plants" id="content">
				<span
					bind:this={pumpkinItem}
					class="bg-img-wrapper ground-option"
					style={`background-image:url(${pumpkinCell});` +
						questions[$pointerGridGround]?.rightAnswer}
				/>
			</div>
			<div class="aqua" id="content">
				<span
					bind:this={aquaItem}
					class="bg-img-wrapper aqua-option"
					style={`background-image:url(${aquaCell});` +
						questions[$pointerGridGround]?.optionAnswers?.join(';') +
						';' +
						questions[$pointerGridGround]?.option}
				/>
			</div>
			<div class="background">
				{#each new Array(25) as _}
					<span class="bg-img-wrapper ground-item" style={`background-image:url(${groundCell})`} />
				{/each}
			</div>
			<div class="overlay">
				{#each new Array(25) as _}
					<span class="overlay-item" />
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	:global(body) {
		background: #2e292d;
	}
	main {
		display: flex;
		align-items: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 1.4rem;
	}
	button:disabled {
		opacity: 0.5;
	}
	.editor-wrapper {
		height: 100vh;
		width: 50%;
		color: white;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.editor-logo-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 3rem;
	}
	.editor-logo {
		font-size: 2.4rem;
		line-height: 1.3;
		color: #fc9337;
	}
	.editor-logo-arrows {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.editor-logo-arrows button {
		border: none;
		outline: none;
		background: none;
		font-family: 'Press Start 2P', cursive;
		color: white;
		cursor: pointer;
	}

	.editor-text {
		margin-bottom: 2rem;
		line-height: 140%;
		white-space: pre-line;
	}
	.editor {
		display: flex;
		font-family: 'Source Code Pro', monospace;
		background: #2f2f2f;
		padding: 1rem;
		position: relative;
		z-index: 9;
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
		width: 15rem;
		align-self: flex-end;
		font-size: 1.6rem;
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		border: none;
		color: white;
		background: #50c878;
		cursor: pointer;
		font-family: 'Source Code Pro', monospace;
	}
	.button-end {
		flex-basis: 50%;
	}
	.editor-counter {
		font-size: 10rem;
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		opacity: 0.2;
	}
	.view-wrapper {
		padding: 2rem;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.view {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50vw;
		height: 50vw;
		min-width: 300px;
		min-height: 300px;
		max-width: calc(90vh - 2em);
		max-height: calc(90vh - 2em);
		overflow: hidden;
		border: 15px solid #44281a;
		border-radius: 10px;
	}
	.background,
	.plants,
	.overlay,
	.aqua {
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		grid-template-rows: repeat(5, 20%);
		grid-template-columns: repeat(5, 20%);
		width: 100%;
		height: 100%;
	}

	.bg-img-wrapper {
		width: 100%;
		height: 100%;
		background-size: calc(10vw - 4px);
	}

	.ground-option {
		z-index: 9;
		aspect-ratio: 1 / 1;
	}
	.aqua-option {
		z-index: 5;
		aspect-ratio: 1 / 1;
		opacity: 0.4;
	}
	.ground-item {
		aspect-ratio: 1 / 1;
	}
	.overlay-item {
		width: 100%;
		height: 100%;
		z-index: 50;
		background: none;
		box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.05), inset -3px -3px 0 #44281a;
		/* border: 2px solid #44281a; */
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
	.editor-counter-mobile {
		display: none;
	}
	.buttons {
		display: flex;
		gap: 2rem;
	}
	.link {
		color: white;
		text-decoration: none;
		cursor: pointer;
		width: 15rem;
		font-size: 1.6rem;
		padding: 1rem 1.5rem;
		font-family: 'Source Code Pro', monospace;
		border-radius: 0.5rem;
		background: #569cd6;
		align-self: center;
		text-align: center;
		margin-top: 2rem;
		flex-basis: 50%;
	}
	@media (max-width: 1500px) {
		.editor-counter {
			font-size: 7rem;
		}
		.editor-button {
			position: relative;
			width: 15rem;
			margin-top: 5rem;
			align-self: flex-end;
		}
	}
	@media (max-width: 1300px) {
		.editor-counter {
			font-size: 5rem;
		}
	}
	@media (max-width: 1000px) {
		main {
			flex-direction: column;
			font-size: 1rem;
		}
		.editor-counter {
			display: none;
		}
		.editor-wrapper {
			width: 100%;
			height: 100%;
		}
		.editor-logo {
			font-size: 1.8rem;
		}
		.view-wrapper {
			height: 100%;
		}
		.editor-button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
			width: 10rem;
		}
		.editor,
		.editor-input {
			font-size: 1.1rem;
		}
		.editor-counter-mobile {
			display: block;
		}
	}
	@media (max-width: 480px) {
		.margin-l {
			margin-left: 0.7rem;
		}
		.editor-area {
			margin-left: 0;
			padding: 1rem 0;
			white-space: pre-line;
		}
	}
</style>
