// simple array of objects
var produtos = [
	{
		nome: 'Shampoo',
		preco: 1.45
	},
	{
		nome: 'Condicionador',
		preco: 2.45
	}
];

exports.produtos = function(req, res) {
	res.send(produtos);
};