class Tile extends React.Component {
	render() {
		return(
			<input 
				type='number' 
				max='9' 
				min='1' 
				value={this.state.board} 
				onChange={this.handleChange} //to i value bedzie z board
			/>

		);
	}
}

export default Tile;