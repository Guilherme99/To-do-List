import React, {Component} from 'react';
import TechItem from './TechItem';


class TechList extends  Component{

	state = {
		newTech: "",
		techs : []
	};

	handleInputChange = e => {
		this.setState({newTech: e.target.value }); 
	}

	handlesubmit = e => {
		 e.preventDefault();

		 if(this.state.newTech!=""){

		 	this.setState({
		 	techs: [... this.state.techs, this.state.newTech],
		 	newTech: ""

		 	});	
		 }else{
		 	alert("Vazio");
		 }
		 
	}

	handleDelete = (tech) => {
		this.setState({techs: this.state.techs.filter(t => t != tech)})
	}
	render () {
		return (

			<>
				<form onSubmit={this.handlesubmit}> 
				<h1> Lista Simples</h1>
				<input 
						type="text" 
						name="newTech" 
						placeholder="Insira uma nova tarefa"
						onChange={this.handleInputChange} 
						value={this.state.newTech}
					/>

					<button 
						type="submit"
					> Enviar </button> 
					<ul>
						{
							this.state.techs.map(tech => <TechItem 
								key={tech} 
								tech={tech} 
								onDelete={() => this.handleDelete(tech)}

								/>
							)}
					</ul>


				</form>

			</>




		);
	}
}

export default TechList;