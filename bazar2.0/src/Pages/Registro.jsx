import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const tableData = [
  {
    CodigoP: '123abc',
    peca: 'tenis',
    marca: 'nike',
    cor: 'preto',
    valorP: '123,00',
    valorPorCem: '132,00',
  },
  {
    CodigoP: '456def',
    peca: 'camisa',
    marca: 'adidas',
    cor: 'branca',
    valorP: '223,00',
    valorPorCem: '232,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
  {
    CodigoP: '156jbc',
    peca: 'oculos',
    marca: 'haibane',
    cor: 'rosa',
    valorP: '23,00',
    valorPorCem: '32,00',
  },
];

export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '700px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div style={{ margin: 'auto', width: '80%'}}>
      <h1>Nome Pessoa: Pietro</h1>
        <TextField hintText="Nome produto"/>
        <TextField hintText="Marca produto"/>
        <TextField hintText="Cor produto"/>
        <TextField hintText="Valor procuto"/>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <RaisedButton label="Add" primary={true} />
        </div>
      <div style={{ margin: 'auto', width: '80%', border: '3px solid #757575'}}>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'left'}}>
                <h1>Tabela</h1>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The CodigoP">CodigoP</TableHeaderColumn>
              <TableHeaderColumn tooltip="The peca">peca</TableHeaderColumn>
              <TableHeaderColumn tooltip="The marca">marca</TableHeaderColumn>
              <TableHeaderColumn tooltip="The cor">cor</TableHeaderColumn>
              <TableHeaderColumn tooltip="The valorP">valorP</TableHeaderColumn>
              <TableHeaderColumn tooltip="The valorPorCem">valorPorCem</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.CodigoP}</TableRowColumn>
                <TableRowColumn>{row.peca}</TableRowColumn>
                <TableRowColumn>{row.marca}</TableRowColumn>
                <TableRowColumn>{row.cor}</TableRowColumn>
                <TableRowColumn>{row.valorP}</TableRowColumn>
                <TableRowColumn>{row.valorPorCem}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
          </TableFooter>
        </Table>
        </div>
      </div>
    );
  }
}
