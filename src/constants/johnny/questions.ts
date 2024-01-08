export const questions = [
	{
		content:
			'Добро пожаловать в Help Johnny. Игра, в которой тебе нужно помочь псу Джонни найти дорогу в свою уютную будку с помощью технологии FlexBox! Направь нашего верного друга в правую часть, используя свойство justify-content. Это свойство CSS выравнивает элементы горизонтально и принимает следующие значения: flex-start, flex-end, center, space-between, space-around.',
		options: [''],
		correctOptions: ['justify-content:flex-end'],
		dogs: 1
	},
	{
		content:
			'Познакомьтесь с Чарли, он будет помогать вам разбираться во FlexBox вместе с Джонни. Теперь тебе снова нужно использовать свойство justify-content, но на этот раз направь наших верных помошников в центр. Помни, что у каждой собаки своя будка.',
		options: [''],
		correctOptions: ['justify-content:center'],
		dogs: 2
	},
	{
		content:
			'Познакомьтесь с Фредди, он будет помогать вам разбираться во FlexBox вместе с Джонни и Чарли. Теперь тебе снова нужно использовать свойство justify-content, но на этот раз распредели наших верных помошников так, чтобы между ними было одинаковое расстояние.',
		options: [''],
		correctOptions: ['justify-content:space-between'],
		dogs: 3
	},
	{
		content:
			'Теперь тебе снова нужно использовать свойство justify-content, но на этот раз распредели наших верных помошников так, чтобы между ними было одинаковое расстояние, а также пространство вокруг.',
		options: [''],
		correctOptions: ['justify-content:space-around'],
		dogs: 3
	},
	{
		content:
			'Теперь используй align-items, чтобы помочь Джонни и Чарли добраться до нижней части. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения: flex-start, flex-end, center, baseline, stretch.',
		options: [''],
		correctOptions: ['align-items:flex-end'],
		dogs: 2
	},
	{
		content: 'Направь Джонни в центр, используя justify-content и align-items вместе.',
		options: ['', ''],
		correctOptions: ['justify-content:center', 'align-items:center'],
		dogs: 1
	},
	{
		content:
			'Собачкам снова нужно пересечь все пространство и отправиться в нижнуюю часть. В этот раз к будкам, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.',
		options: ['', ''],
		correctOptions: ['justify-content:space-between', 'align-items:flex-end'],
		dogs: 3
	},
	{
		content:
			'Собачкам нужно выстроиться в том же порядке, что и их будки (напомним, что у Джонни - коричневая, у Чарли - белая, у Фредди - желтая), используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения: row, row-reverse, column, column-reverse.',
		options: [''],
		correctOptions: ['flex-direction:row-reverse'],
		dogs: 3
	},
	{
		content:
			'Теперь помоги собачкам переместиться в свои будки, которые расположены вертикально, используя flex-direction',
		options: [''],
		correctOptions: ['flex-direction:column'],
		dogs: 3
	},
	{
		content:
			'Помоги собачкам попасть в свои будки. Хоть и кажется, что они почти на своих местах, всё же придётся применить и flex-direction, и justify-content, чтобы поместить их правильно. Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами',
		options: ['', ''],
		correctOptions: ['flex-direction:row-reverse', 'justify-content:flex-end'],
		dogs: 3
	},
	{
		content:
			'Тебе снова нужно использовать flex-direction и justify-content. Заметь, когда в качестве направления выбрана колонка, то justify-content влияет на вертикальное выравнивание, а align-items — на горизонтальное',
		options: ['', ''],
		correctOptions: ['flex-direction:column', 'justify-content:flex-end'],
		dogs: 2
	},
	{
		content: 'Помоги собачкам вернуться в их будки с помощью flex-direction, justify-content',
		options: ['', ''],
		correctOptions: ['flex-direction:column', 'justify-content:space-between'],
		dogs: 3
	},
	{
		content:
			'Помоги собачкам вернуться в их будки с помощью flex-direction, justify-content и align-items',
		options: ['', '', ''],
		correctOptions: [
			'flex-direction:row-reverse',
			'justify-content:center',
			'align-items: flex-end'
		],
		dogs: 3
	}
];
