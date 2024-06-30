export const questions = [
	{
		content:
			'Добро пожаловать в Pumpkin Field. Игра, в которой тебе нужно полить тыквенное поле с помощью технологии CSS - Grid! Поливай только те зоны, на которых есть тыквы, используя свойство grid-column-start.',
		options: [''],
		rightAnswer: 'grid-column-start: 3;',
		optionAnswers: []
	},
	{
		content:
			'Когда вы используете только grid-column-start, grid-элемент по умолчанию “захватит” только один столбец. Однако вы можете увеличить элемент между несколькими столбцами, если добавите свойство grid-column-end. Полейте все тыквы, избегая пустые участки. Помните, что тыква начинается на первой вертикальной grid-линии и заканчивается на четвёртой.',
		options: [''],
		rightAnswer: 'grid-column-start:1; grid-column-end: 4;',
		optionAnswers: ['grid-column-start: 1']
	},
	{
		content:
			'Когда вы соединяли grid-column-start и grid-column-end, вы могли подумать, что конечное значение обязательно должно быть больше начального. Но это не так! Попробуйте задать свойству grid-column-end значение меньше, чем 5, чтобы полить тыкву.',
		options: [''],
		rightAnswer: 'grid-column-start:5; grid-column-end: 2;',
		optionAnswers: ['grid-column-start: 5']
	},
	{
		content:
			'Если вы хотите посчитать grid-строки справа налево вместо слева направо, вы можете задать grid-column-start и grid-column-end отрицательные значения. Например, вы можете присвоить значение, равное -1, чтобы указать первую grid-строку начиная справа.  Попробуйте присвоить grid-column-end отрицательное значение.',
		options: [''],
		rightAnswer: 'grid-column-start:1; grid-column-end: -2;',
		optionAnswers: ['grid-column-start: 1']
	},
	{
		content:
			'Вместо определения grid-элемента на основе начальной и конечной позиции grid-строк вы можете задавать их с помощью необходимой вам ширины строк, используя span. Помните, что span работает только с положительными значениями.\nДля примера, полейте эту тыкву, используя свойство grid-column-end: span 2.',
		options: [''],
		rightAnswer: 'grid-column-start:2; grid-column-end: span 2;',
		optionAnswers: ['grid-column-start: 2']
	},
	{
		content: 'Попробуйте снова использовать grid-column-end вместе со span, чтобы полить тыкву.',
		options: [''],
		rightAnswer: 'grid-column-start:1; grid-column-end: span 5;',
		optionAnswers: ['grid-column-start: 1']
	},
	{
		content: 'Попробуйте снова использовать grid-column-end вместе со span, чтобы полить тыкву.',
		options: [''],
		rightAnswer: 'grid-column-start:1; grid-column-end: span 5;',
		optionAnswers: ['grid-column-start: 1']
	},
	{
		content:
			'Вы также можете использовать span вместе с grid-column-start, чтобы присвоить значение ширины grid-элемента относительно конечной позиции.',
		options: [''],
		rightAnswer: 'grid-column-end: 6; grid-column-start: span 4;',
		optionAnswers: ['grid-column-end: 6']
	},
	{
		content:
			'Печатать каждый раз grid-column-start и grid-column-end может быть немного утомительно. \nК счастью, существует краткая форма grid-column, которая принимает оба значения сразу через косую черту: /.\n\nНапример, grid-column: 2/4 скажет grid-элементу начаться на второй вертикальной grid-линии и закончиться на четвёртой.',
		options: [''],
		rightAnswer: 'grid-column: 2/4',
		optionAnswers: []
	},
	{
		content:
			'Попробуйте использовать grid-column, чтобы полить эту тыкву. span также работает с этим сокращённым свойством, так что пробуйте!',
		options: [''],
		rightAnswer: 'grid-column: 3 /span 2',
		optionAnswers: []
	},
	{
		content:
			'В Grid Layout вы можете легко позиционировать элементы в двух направлениях: в столбцах и в строках. grid-row-start работает почти как grid-column-start, но только по вертикальной оси.\n\nИспользуйте grid-row-start, чтобы полить эту тыкву.',
		options: [''],
		rightAnswer: 'grid-row-start: 4',
		optionAnswers: []
	},
	{
		content: 'А теперь попробуйте использовать сокращённое свойство grid-row.',
		options: [''],
		rightAnswer: 'grid-row: 2/5',
		optionAnswers: []
	},
	{
		content:
			'Используйте grid-column и grid-row одновременно, чтобы разместить элемент в двух направлениях.',
		options: ['', ''],
		rightAnswer: 'grid-column: 3; grid-row: 3',
		optionAnswers: []
	},
	{
		content:
			'Вы также можете использовать grid-column и grid-row вместе, чтобы охватить более крупные зоны внутри grid-сетки.',
		options: ['', ''],
		rightAnswer: 'grid-column: 3/6; grid-row: 2/5',
		optionAnswers: []
	},
	{
		content:
			'Если вас также утомляет печатать grid-column и grid-row, есть сокращённое свойство и для этого. grid-area принимает 4 значения, разделенные косой чертой /: grid-row-start, grid-column-start, grid-row-end и grid-column-end.\n\nНапример, grid-area: 1/2/3/4;.',
		options: [''],
		rightAnswer: 'grid-area: 2/2/5/6',
		optionAnswers: []
	}
];

export const finalText =
	'Поздравляем! Вы успешно завершили игру по обучению технологии Grid! Теперь у вас есть важные знания о том, как использовать Grid для создания интерфейса вашего приложения.\n\n Мы надеемся, что эта игра помогла вам углубить свои знания о Grid и вдохновила на дальнейшее исследование этой технологии. Помните, что использование Grid - это всего лишь один из способов создания анимаций на веб-страницах.\n\n Спасибо, что играли в нашу игру обучения Grid! Надеемся, что вам понравилось и до новых встреч в наших новых играх!';
