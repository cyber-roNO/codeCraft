<script>
	import '../global.css';
	import dogJohnny from '$lib/images/dog-johnny.png';
	import dogCharlie from '$lib/images/dog-charlie.png';
	import dogFreddy from '$lib/images/dog-freddy.png';
	import houseJohnny from '$lib/images/house-johnny.png';
	import houseCharlie from '$lib/images/house-charlie.png';
	import houseFreddy from '$lib/images/house-freddy.png';
	import { afterUpdate } from 'svelte';

	let questions = [
		{
			content:
				'Добро пожаловать в Help Johnny. Игра, в которой тебе нужно помочь псу Джонни найти дорогу в свою уютную будку с помощью технологии FlexBox! Направь нашего верного друга в правую часть, используя свойство justify-content. Это свойство CSS выравнивает элементы горизонтально и принимает следующие значения: flex-start, flex-end, center, space-between, space-around.',
			options: ['justify-content:flex-end'],
			correctOptions: ['justify-content:flex-end'],
			dogs: [dogJohnny]
		},
		{
			content:
				'Познакомьтесь с Чарли, он будет помогать вам разбираться во FlexBox вместе с Джонни. Теперь тебе снова нужно использовать свойство justify-content, но на этот раз направь наших верных помошников в центр. Помни, что у каждой собаки своя будка.',
			options: ['justify-content:center'],
			correctOptions: ['justify-content:center'],
			dogs: [dogJohnny, dogCharlie]
		},
		{
			content:
				'Познакомьтесь с Фредди, он будет помогать вам разбираться во FlexBox вместе с Джонни и Чарли. Теперь тебе снова нужно использовать свойство justify-content, но на этот раз распредели наших верных помошников так, чтобы между ними было одинаковое расстояние.',
			options: ['justify-content:space-between'],
			correctOptions: ['justify-content:space-between'],
			dogs: [dogJohnny, dogCharlie, dogFreddy]
		},
		{
			content:
				'Теперь используй align-items, чтобы помочь Джонни и Чарли добраться до нижней части. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения: flex-start, flex-end, center, baseline, stretch.',
			options: ['align-items:flex-end'],
			correctOptions: ['align-items:flex-end'],
			dogs: [dogJohnny, dogCharlie]
		},
		{
			content: 'Направь Джонни в центр, используя justify-content и align-items вместе.',
			options: ['justify-content:center', 'align-items:center'],
			correctOptions: ['justify-content:center', 'align-items:center'],
			dogs: [dogJohnny]
		},
		{
			content:
				'Собачкам снова нужно пересечь все пространство и отправиться в нижнуюю часть. В этот раз к будкам, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.',
			options: ['justify-content:space-between', 'align-items:flex-end'],
			correctOptions: ['justify-content:space-between', 'align-items:flex-end'],
			dogs: [dogJohnny, dogCharlie, dogFreddy]
		},
		{
			content:
				'Собачкам нужно выстроиться в том же порядке, что и их будки (напомним, что у Джонни - коричневая, у Чарли - белая, у Фредди - желтая), используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения: row, row-reverse, column, column-reverse.',
			options: ['flex-direction:row-reverse'],
			correctOptions: ['flex-direction:row-reverse'],
			dogs: [dogJohnny, dogCharlie, dogFreddy]
		},
		{
			content:
				'Теперь помоги собачкам переместиться в свои будки, которые расположены вертикально, используя flex-direction',
			options: ['flex-direction:row-reverse'],
			correctOptions: ['flex-direction:row-reverse'],
			dogs: [dogJohnny, dogCharlie, dogFreddy]
		}
	];

	let strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let isCorrect = false;
	/**
	 * @type {HTMLSpanElement}
	 */
	let houseJohnnyElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let dogJohnnyElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let houseCharlieElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let dogCharlieElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let houseFreddyElement;
	/**
	 * @type {HTMLSpanElement}
	 */
	let dogFreddyElement;

	let answers = new Array(questions.length).fill(null);

	let questionPointer = 0;

	afterUpdate(() => {
		if (
			houseJohnnyElement.getBoundingClientRect().x == dogJohnnyElement.getBoundingClientRect().x &&
			houseJohnnyElement.getBoundingClientRect().y == dogJohnnyElement.getBoundingClientRect().y
		) {
			isCorrect = true;
		} else {
			isCorrect = false;
		}
	});
</script>

<svelte:head>
	<title>Help Johnny</title>
	<meta name="description" content="codeCraft app" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Source+Code+Pro&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	{#if !(questionPointer > answers.length - 1)}
		<div class="editor-wrapper">
			<h1 class="editor-logo">HELP JOHNNY</h1>
			<p class="editor-text">
				{questions[questionPointer].content}
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
						}}>Следующий</button
					>
				</div>
			</div>
		</div>
	{:else}
		<div class="editor-wrapper">end</div>
	{/if}

	<div class="view">
		<div class="background" style={questions[questionPointer].correctOptions?.join(';')}>
			<span bind:this={houseJohnnyElement} class="img-wrapper doggy-house"
				><img src={houseJohnny} alt="house" /></span
			>
			{#if questions[questionPointer].dogs?.length > 1}
				<span bind:this={houseCharlieElement} class="img-wrapper doggy-house"
					><img src={houseCharlie} alt="house" /></span
				>
			{/if}
			{#if questions[questionPointer].dogs?.length > 2}
				<span bind:this={houseFreddyElement} class="img-wrapper doggy-house"
					><img src={houseFreddy} alt="house" /></span
				>
			{/if}
		</div>
		<div class="grass" style={questions[questionPointer].options.join(';')} id="content">
			<span bind:this={dogJohnnyElement} class="img-wrapper doggy"
				><img src={dogJohnny} alt="doggy" /></span
			>
			{#if questions[questionPointer].dogs?.length > 1}
				<span bind:this={dogCharlieElement} class="img-wrapper doggy"
					><img src={dogCharlie} alt="doggy" /></span
				>
			{/if}
			{#if questions[questionPointer].dogs?.length > 2}
				<span bind:this={dogFreddyElement} class="img-wrapper doggy"
					><img src={dogFreddy} alt="doggy" /></span
				>
			{/if}
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
		display: flex;
		flex-direction: column;
	}
	.editor-logo {
		margin-bottom: 3rem;
	}
	.editor-text {
		margin-bottom: 2rem;
		line-height: 150%;
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
