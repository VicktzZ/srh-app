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
            <TextField>Correspondente</TextField>
        </div>
    </div>
    <div class="w-full">
        <DataTable class="w-full">
            <DataTableHead>
                <DataTableRow>
                <DataTableCell>Modelo</DataTableCell>
                <DataTableCell>Série</DataTableCell>
                <DataTableCell>Status</DataTableCell>
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
                <DataTableCell>Frozen yogurt</DataTableCell>
                <DataTableCell>24</DataTableCell>
                <DataTableCell>4.0</DataTableCell>
                <DataTableCell>Super tasty</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                <DataTableCell>Ice cream sandwich</DataTableCell>
                <DataTableCell>37</DataTableCell>
                <DataTableCell>4.33333333333</DataTableCell>
                <DataTableCell>I like ice cream more</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                <DataTableCell>Eclair</DataTableCell>
                <DataTableCell>24</DataTableCell>
                <DataTableCell>6.0</DataTableCell>
                <DataTableCell>New filing flavor</DataTableCell>
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