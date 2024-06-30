<script lang="ts">
	import '../../global.css';
	import dogJohnny from '$lib/images/dogs/dog-johnny.png';
	import dogCharlie from '$lib/images/dogs/dog-charlie.png';
	import dogFreddy from '$lib/images/dogs/dog-freddy.png';
	import houseJohnny from '$lib/images/dogs/house-johnny.png';
	import houseCharlie from '$lib/images/dogs/house-charlie.png';
	import houseFreddy from '$lib/images/dogs/house-freddy.png';
	import { afterUpdate } from 'svelte';
	import { pointer } from '../../stores/pointer';
	import { questions } from '../../constants/johnny/questions';

	const strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let isCorrect = false;

	let houseJohnnyElement: HTMLSpanElement;
	let dogJohnnyElement: HTMLSpanElement;
	let houseCharlieElement: HTMLSpanElement;
	let dogCharlieElement: HTMLSpanElement;
	let houseFreddyElement: HTMLSpanElement;
	let dogFreddyElement: HTMLSpanElement;

	let answers = new Array(questions.length).fill(null);

	afterUpdate(() => {
		const houseJohnnyPosition = {
			x: houseJohnnyElement?.getBoundingClientRect().x | 1,
			y: houseJohnnyElement?.getBoundingClientRect().y | 1
		};
		const houseCharliePosition = {
			x: houseCharlieElement?.getBoundingClientRect().x | 1,
			y: houseCharlieElement?.getBoundingClientRect().y | 1
		};
		const houseFreddyPosition = {
			x: houseFreddyElement?.getBoundingClientRect().x | 1,
			y: houseFreddyElement?.getBoundingClientRect().y | 1
		};

		const JohnnyPosition = {
			x: dogJohnnyElement?.getBoundingClientRect().x | 1,
			y: dogJohnnyElement?.getBoundingClientRect().y | 1
		};
		const CharliePosition = {
			x: dogCharlieElement?.getBoundingClientRect().x | 1,
			y: dogCharlieElement?.getBoundingClientRect().y | 1
		};
		const FreddyPosition = {
			x: dogFreddyElement?.getBoundingClientRect().x | 1,
			y: dogFreddyElement?.getBoundingClientRect().y | 1
		};

		if (
			houseJohnnyPosition.x == JohnnyPosition.x &&
			houseJohnnyPosition.y == JohnnyPosition.y &&
			houseCharliePosition.x == CharliePosition.x &&
			houseCharliePosition.y == CharliePosition.y &&
			houseFreddyPosition.x == FreddyPosition.x &&
			houseFreddyPosition.y == FreddyPosition.y
		) {
			isCorrect = true;
		} else {
			isCorrect = false;
		}
	});
</script>

<svelte:head>
	<title>Help Johnny</title>
	<meta
		name="description"
		content="Help Johnny - это игра, в которой тебе нужно помочь псу Джонни найти дорогу в свою уютную будку с помощью технологии FlexBox!"
	/>
	<meta name="keywords" content="flexbox, game, css" />
	<meta name="author" content="Roman Novikov" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="HELP JOHNNY" />
	<meta property="og:title" content="Help Johnny" />
	<meta
		property="og:description"
		content="Help Johnny - это игра, в которой тебе нужно помочь псу Джонни найти дорогу в свою уютную будку с помощью технологии FlexBox!"
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
	{#if !($pointer > answers.length - 1)}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">HELP JOHNNY</h1>
				<div class="editor-logo-arrows">
					<button
						disabled={$pointer == 0}
						on:click={() => {
							+$pointer--;
						}}>{'<'}</button
					>
					<p>УРОВЕНЬ</p>
					<span class="editor-counter-mobile">{+$pointer + 1}/{answers.length}</span>
					<button
						on:click={() => {
							+$pointer++;
						}}>{'>'}</button
					>
				</div>
			</div>

			<p class="editor-text">
				{questions[$pointer].content}
			</p>
			<div class="editor shake">
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
					{#each questions[$pointer].options as option}
						<input class="editor-input margin-l" type="text" bind:value={option} />
					{/each}

					<p class="bracket">{'}'}</p>
					<button
						class="editor-button"
						disabled={!isCorrect}
						on:click={() => {
							+$pointer++;
						}}
					>
						Следующий
					</button>
				</div>
			</div>
			<span class="editor-counter">{+$pointer + 1}/{answers.length}</span>
		</div>
	{:else}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">HELP JOHNNY</h1>
			</div>
			<p class="editor-text">
				Поздравляем! Вы успешно завершили игру по обучению технологии Flexbox! Теперь у вас есть
				важные знания о том, как использовать Flexbox для создания адаптивного и удобного интерфейса
				веб-страниц.
			</p>
			<p class="editor-text">
				Мы надеемся, что эта игра помогла вам углубить свои знания о Flexbox и вдохновила на
				дальнейшее исследование этой технологии. Помните, что использование Flexbox - это всего лишь
				один из способов создания интерфейсов на веб-страницах, но он может быть очень мощным и
				гибким инструментом для создания лучшего пользовательского опыта.
			</p>
			<p class="editor-text">
				Спасибо, что играли в нашу игру обучения Flexbox! Надеемся, что вам понравилось и до новых
				встреч в наших новых играх!
			</p>
			<div class="buttons">
				<a href="/" class="link"> На главную </a>
				<button
					class="editor-button button-end"
					on:click={() => {
						$pointer = 0;
					}}>Играть снова</button
				>
			</div>
		</div>
	{/if}

	<div class="view">
		<div class="background" style={questions[$pointer]?.correctOptions?.join(';')}>
			<span bind:this={houseJohnnyElement} class="img-wrapper doggy-house"
				><img src={houseJohnny} alt="house" /></span
			>
			{#if questions[$pointer]?.dogs > 1}
				<span bind:this={houseCharlieElement} class="img-wrapper doggy-house"
					><img src={houseCharlie} alt="house" /></span
				>
			{/if}
			{#if questions[$pointer]?.dogs > 2}
				<span bind:this={houseFreddyElement} class="img-wrapper doggy-house"
					><img src={houseFreddy} alt="house" /></span
				>
			{/if}
		</div>
		<div class="grass" style={questions[$pointer]?.options.join(';')} id="content">
			<span bind:this={dogJohnnyElement} class="img-wrapper doggy"
				><img src={dogJohnny} alt="doggy" /></span
			>
			{#if questions[$pointer]?.dogs > 1}
				<span bind:this={dogCharlieElement} class="img-wrapper doggy"
					><img src={dogCharlie} alt="doggy" /></span
				>
			{/if}
			{#if questions[$pointer]?.dogs > 2}
				<span bind:this={dogFreddyElement} class="img-wrapper doggy"
					><img src={dogFreddy} alt="doggy" /></span
				>
			{/if}
		</div>
	</div>
</main>

<style>
	:global(body) {
		background: #50c878;
	}
	main {
		display: flex;
		align-items: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 1.4rem;
		background: #75b6e7;
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

	.view {
		height: 100vh;
		width: 50vw;
		background: #50c878;
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
		padding: 3rem;
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
		transform: scale(0.75);
		margin-top: 2.5rem;
		animation: animeDog infinite 2s ease;
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
	.shake {
		animation: shake infinite 0.3s linear;
	}

	@keyframes animeDog {
		0% {
			transform: scale(0.75) translateY(0);
		}
		50% {
			transform: scale(0.75) translateY(0.5rem);
		}
		100% {
			transform: scale(0.75) translateY(0);
		}
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
		.img-wrapper {
			width: 18rem;
			height: 18rem;
		}
		.doggy img {
			margin-top: 1.5rem;
		}
		.background,
		.grass {
			padding: 2rem;
		}
		.editor-counter {
			font-size: 7rem;
		}
	}
	@media (max-width: 1300px) {
		.img-wrapper {
			width: 15rem;
			height: 15rem;
		}
		.doggy img {
			margin-top: 1rem;
		}
		.background,
		.grass {
			padding: 1.5rem;
		}
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
		.editor-logo-group {
			margin-bottom: 2rem;
		}
		.view {
			width: 100%;
			height: 100%;
			min-height: 40rem;
		}
		.editor-button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
		}
		.editor,
		.editor-input {
			font-size: 1.1rem;
		}
		.editor-counter-mobile {
			display: block;
		}
		.img-wrapper {
			width: 12rem;
			height: 12rem;
		}
	}
	@media (max-width: 480px) {
		.margin-l {
			margin-left: 0.7rem;
		}
		.editor-area {
			margin-left: 0;
			padding: 1rem 0;
		}
		.img-wrapper {
			width: 9rem;
			height: 9rem;
		}
	}
</style>
