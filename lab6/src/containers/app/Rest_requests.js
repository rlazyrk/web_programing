import axios from "axios";
import {getUrl, getWithFilters, getByIdURL} from "./constants";

const getRequest = async () => {
    try {
        const response = await axios.get(getUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const getFiltered = async ({filters}) =>{
    try {
        const response = await axios.get(getWithFilters,{
            params: filters
        });
        return response.data
    }
    catch (error){
        return getRequest()

    }

}

const getById = async ({id}) =>{
    try {
        const response = await axios.get(`${getByIdURL}${id}`)
        return response.data
    }
    catch (error){
    }
}

export {getRequest, getFiltered, getById};

