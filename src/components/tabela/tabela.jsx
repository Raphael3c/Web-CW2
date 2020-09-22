import React, {Component} from 'react';
import axios from 'axios';
import './tabela.css'

const baseURL = 'http://localhost:3000/rotas'

const initialState = {
    rotas: {id: '', nome_rota: '', horario: ''},
    list: []
}

export default class Render extends Component{

    state = { ...initialState }

    componentDidMount(){
        axios(baseURL).then(resp =>{
            console.log(resp.data)
            this.setState({list: resp.data})
        })
    }

    getList(route, add){
        const list = this.state.list.filter(p => p.id !== route.id);
        if(add) list.unshift(route); 
        return list;
    }

    remove(rota){
        axios.delete(`${baseURL}/${rota.id}`).then(resp => {
            const list = this.getList(rota)
            this.setState({list})
        })
    }


    updateField(event){
        const rota = {...this.state.rotas}
        rota[event.target.name] = event.target.value
        this.setState({ rota })
    }

    renderTable(){
        return (
            <div id="tabela">   
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome da Rota</th>
                            <th>Horário da Rota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>         
        );
    }

    renderRows(){
        return this.state.list.map(rotas =>{
            return(
                <tr key={rotas.id}>
                    <td>{rotas.id}</td>
                    <td>{rotas.nome_rota}</td>
                    <td>{rotas.horario}</td>
                    <td>
                        <button className='btn' onClick={() => this.remove(rotas)}>Apagar</button>
                        {/*<button className='btn'>Apagar</button>*/}
                    </td>
                </tr>
            );
        }
        );
    }

    render(){
        return (
            this.renderTable()
        )
    }
}