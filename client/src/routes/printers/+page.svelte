<script lang="ts">
    import { mdiMagnify } from '@mdi/js'
    import {
      DataTable,
      DataTableHead,
      DataTableRow,
      DataTableCell,
      DataTableBody, 
	  Input,
	  TextField,
	  Icon, 
	  Select
    } from 'svelte-materialify';

    const filterOptions = [ 
        'Modelo',
        'Série',
        'Status',
        'IP',
        'Fila',
        'Setor',
        'Páginas Restantes',
        '(%)',
        'Páginas Impressas',
        'Contador'
    ]

    const opOptions = [
        '=',
        '<>',
        '>=',
        '<=',
        '>',
        '<'
    ]
</script>
  
<div class="page-wrapper">
    <div class="filter-wrapper">
        <div>
            <TextField>
                <div slot="prepend-outer">
                    <Icon path={mdiMagnify} />
                </div>
                Buscar
            </TextField>
        </div>
        <div class="filter-container">
            <Select items={filterOptions}>Filtro</Select>
            <Select items={opOptions}>Operador</Select>
            <TextField>Valor</TextField>
        </div>
    </div>
    <div class="w-full">
        <DataTable class="w-full">
            <DataTableHead>
                <DataTableRow>
                <DataTableCell>Status</DataTableCell>
                <DataTableCell>Modelo</DataTableCell>
                <DataTableCell>Série</DataTableCell>
                <DataTableCell>Prédio</DataTableCell>
                <DataTableCell>IP</DataTableCell>
                <DataTableCell>Fila</DataTableCell>
                <DataTableCell>Setor</DataTableCell>
                <DataTableCell>Páginas Restantes</DataTableCell>
                <DataTableCell>(%)</DataTableCell>
                <DataTableCell>Páginas Impressas</DataTableCell>
                <DataTableCell>Contador</DataTableCell>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                <DataTableRow>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                    <DataTableCell>TESTE</DataTableCell>
                </DataTableRow>
            </DataTableBody>
        </DataTable>
    </div>
</div>

<style>
    .page-wrapper {
        @apply min-h-full w-full flex flex-col items-center gap-4
    }

    .filter-wrapper {
        @apply w-full flex justify-between gap-4 items-center
    }

    .filter-container {
        @apply flex gap-2 items-center justify-center p-3 border-stone-400 border-solid border-[1px] rounded
    }
</style>