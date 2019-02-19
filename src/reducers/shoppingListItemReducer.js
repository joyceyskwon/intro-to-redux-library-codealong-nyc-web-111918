export default function shoppingListItemReducer(state = {items: []}, action) {
	console.log(action)
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.item.length is', state.items.length)
			console.log('Updating state.item.length is', state.items.length + 1)
			return Object.assign({}, state, { items: state.items.concat(state.items.length + 1)})

		default:
			console.log('Initial state.items.length is ', state.items.length)
			return state;
	}
}
