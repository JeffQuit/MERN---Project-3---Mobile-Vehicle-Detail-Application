import axios from 'axios';

export default {
	// Gets all books

	// Saves a book to the database
	saveQuote: function (quoteData) {
		return axios.post('/api/quotes', { body: quoteData });
	},
};
