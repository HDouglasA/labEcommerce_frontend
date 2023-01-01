import { ContainerFilters, Sorting, Search, InputPrice } from "./style"

export const Filters = (props) => {
    return (
        <ContainerFilters>
            <section>
                <Search>
                    <input 
                        placeholder="Buscar por Nome..."
                        value={props.query}
                        onChange={(e)=>{props.setQuery(e.target.value)}}
                    />
                    <img src="/iconSearch.png" alt="Buscar"></img>
                </Search>
                <section>
                    <InputPrice 
                        placeholder="Preço Mín"
                        type="number"
                        value={props.minPrice}
                        onChange={(e)=>{props.setMinPrice(e.target.value)}}
                    />
                    <InputPrice 
                        placeholder="Preço Máx"
                        type="number"
                        value={props.maxPrice}
                        onChange={(e)=>{props.setMaxPrice(e.target.value)}}
                    />
                </section>
            </section>
            <Sorting>
                <label htmlFor="sortingParameter" >Ordenar por:</label>
                <select
                    name="sortingParameter" 
                    value={props.sortingParameter} 
                    onChange={(e)=>{props.setSortingParameter(e.target.value)}}
                >
                    <option value="title">Título</option>
                    <option value="price">Preço</option>
                </select>
                <select
                    value={props.order} 
                    onChange={(e)=>{props.setOrder(e.target.value)}}
                >
                    <option value="asc">Crescente</option>
                    <option value="desc">Decrescente</option>
                </select>
            </Sorting>
        </ContainerFilters>
    )
}