import React, {Component} from 'react';
import axios from 'axios';
import './render.css'

const baseURL = 'http://localhost:3000/rotas'

const initialState = {
    rotas: {id: '', nome_rota: '', horario: ''},
    list: []
}

export default class Render extends Component{

    state = { ...initialState }

    componentDidMount(){
        axios(baseURL).then(resp =>{
            this.setState({list: resp.data})
        })
    }

    renderTable(){
        return (
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
                        <button className='btn'>Apagar</button>
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