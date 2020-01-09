import React, { Component } from 'react';
import axios from 'axios'

// UI
import 'date-fns';
import { Card, CardHeader, TextField, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core/'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

// PrimeReact
import { Card as PCard } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export class App extends Component {
    state = {
        checked: false,
        input: '',
        date: null,
        dados: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({ dados: res.data })
        })
    }

    handleInput = e => {
        this.setState({ input: e.target.value })
    }

    handleDateChange = date => {        
        this.setState({ date })
    };

    render() {
        return (
            <div style={styles.container} >

                <div style={{...styles.section, ...styles.prime}}>
                    <PCard title="Exemplo com PrimeReact">
                        <InputText id="input-prime" placeholder="Texto" value={this.state.input} onChange={this.handleInput} />
                        <br/>
                        <Calendar value={this.state.date} onChange={(e) => this.setState({ date: e.value })} showIcon={true} />
                        {/* <PCheckbox checked={this.state.checked} onChange={e => this.setState({checked: e.checked})} /> */}
                    </PCard>
                    <br/>
                    <DataTable value={this.state.dados}>
                        <Column field="title" header="Titulo" />
                        <Column field="body" header="Corpo" />
                    </DataTable>
                </div>

                <div style={{...styles.section, ...styles.ui}}>
                    <Card>
                        <CardHeader title="Exemplo com UI" />
                        <CardContent>
                            <form>
                                <TextField id="input-ui" label="Texto" value={this.state.input} onChange={this.handleInput} />
                                <br/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={this.state.date}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </form>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Titulo</TableCell>
                                            <TableCell>Corpo</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {this.state.dados.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="right">{row.body}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </div>

            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex'
    },
    section: {
        padding: 20,
        flexBasis: '50%'
    },
    prime: {
        backgroundColor: '#03c4e8'
    },
    ui: {
        backgroundColor: '#1976d2'

    }
}

export default App;
