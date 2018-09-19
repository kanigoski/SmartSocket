import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Referência', 'Média/Hora', 'Total/Hora', 'Valor Estimado'],
            dataRows: [
                ['1', 'Aparelho de Som', '0.002', '0.02', 'R$5,10'],
                ['2', 'Frigobar', '0.007', '0.07', 'R$8,60'],
                ['3', 'Torradeira', '0.005', '0.50', 'R$12,50'],
                ['4', 'Tv', '0.09', '0.090', 'R$20,12'],
                ['5', 'Geladeira', '0.20', '0.0020', 'R$15,50'],
                ['6', 'Microondas', '0.41', '0.0047', 'R$5,23']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Referência',  'Média/Hora', 'Total/Hora', 'Valor Estimado' ],
            dataRows: [
                ['1', 'Freezer','0.54', '0.0540', 'R$13,33' ],
                ['2', 'Cafeteira', '0.30', '0.003', 'R$0,25'],
                ['3', 'Filtro de Ar', '0.12', '0.120', 'R$1,23' ],
                ['4', 'Aquecedor', '0.50', '0.560', 'R$4,56' ],
                ['5', 'Fritadiera', '0.22', '0.452', 'R$7,89', ],
                ['6', 'Ar Condicionado', '0.452', '1.259', 'R$5,67' ]
            ]
        };
    }
}
