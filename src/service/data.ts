import axios from "axios";

const operations = {
    getPost: async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {})
            if (res.data) {
                return res.data
            } else {
                throw 'no data'
            }
        } catch (err) {
            throw err
        }
    }
}

export default operations
