import api from "./api";

const allBooks = await api.get("/books")

export {
    allBooks
}