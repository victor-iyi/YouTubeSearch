// export default function () {
// 	return [
// 		{
// 			key: 1,
// 			title: 'Artificial intelligence'
// 		},
// 		{
// 			key: 2,
// 			title: 'Multi Layer Perceptron'
// 		},
// 		{
// 			key: 3,
// 			title: 'Convolutional Neural Network'
// 		},
// 		{
// 			key: 4,
// 			title: 'Sequence to Sequence Modelling'
// 		},
// 		{
// 			key: 5,
// 			title: 'Generative Adversarial Network'
// 		},
// 	]
// }

export default function(state=null, action) {
	switch ( action.type ) {
		case 'VIDEO_CHANGED':
			return action.payload
		default:
			return state
	}
}