import { createSlice, createAsyncThunk, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

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
    }
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
            console.log('Pending ---- ok')
        })
        .addMatcher(isAnyOf(getPizzas.fulfilled), (state, action) => {
            console.log('Fulfilled ---- ok')
            state.data = action.payload.data
            console.log(state.data)
        } )
        .addMatcher(isAnyOf(getPizzas.rejected), (state, action) => {

           console.log(action.payload)
        })
    }
})

//  -------------------------------------возвращаем--принимаем---ошибка--- 
export const getPizzas = createAsyncThunk<InitialState, void, {rejectValue:string}> (
    'get/pizzas', 
    async (_, {rejectWithValue}) => {
        try {
            let newState = {}
            await axios
            .get(`https://628f53f70e69410599da6666.mockapi.io/items`)
            .then((res) => {
                const data = res.data
                newState = {data}

            } )
           
            return newState as InitialState
     
        }catch(e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const {setActiveCategory, setSort} = PizzaSlice.actions
export default PizzaSlice.reducer


