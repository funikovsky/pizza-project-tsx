import { createSlice, createAsyncThunk, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

export interface Ipizza {
    id: number,
    imageUrl: string,
    title: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number

}

interface InitialState {
    data: Array<Ipizza>
    activeCategory: number
    sort: ISort
    loading: boolean
}

export interface ISort {
   
    name: string,
    sortProperty: string
         
}

const initialState: InitialState = {
    data: [],
    activeCategory: 0,
    sort:  { 
        name: 'Популярности', 
        sortProperty: 'raiting' 
    },
    loading: false /*status: loading --- success --- error*/
}

export const PizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {

        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload
        },

        setSort: (state, action: PayloadAction<ISort>)=> {
            state.sort = action.payload
        }
        
    },
    extraReducers: (builder) => {
        builder
        .addMatcher (isAnyOf(getPizzas.pending), (state, action) => {
            state.loading = true
            console.log(action.meta.requestStatus)
        })
        .addMatcher(isAnyOf(getPizzas.fulfilled), (state, action) => {
            console.log(action.meta.requestStatus)
            state.loading = false
            state.data = action.payload
            
        } )
        .addMatcher(isAnyOf(getPizzas.rejected), (state, action) => {

            state.loading = false
            console.log(action.payload)
        })
    }
})

//  -------------------------------------возвращаем--принимаем---ошибка--- 
export const getPizzas = createAsyncThunk<Array<Ipizza>, void, {rejectValue:string}> (
    'pizzas/getPizzas', 
    async (_, {rejectWithValue}) => {
            
        const res = await axios.get(`https://628f53f70e69410599da6666.mockapi.io/items`)
        .then((res) => res.data)
        .catch((error: AxiosError)=> rejectWithValue(`Ошибка загрузки данных: ${error.response?.status}`))
                     
        return res
    }
)

export const {setActiveCategory, setSort} = PizzaSlice.actions
export default PizzaSlice.reducer


