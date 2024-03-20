const API_BASE_URL = "https://65775f19197926adf62e1c85.mockapi.io/api/v1";

export const fetchProducts = async () => {
	const res = await fetch(`${API_BASE_URL}/products`);
	if (!res.ok) throw new Error("Something went error");
	const data = await res.json();
	return data;
};

export const fetchProduct = async (id) => {
    
	const res = await fetch(`${API_BASE_URL}/products/${id}`);
	if (!res.ok) throw new Error("Something went error");
	const data = await res.json();
	return data;
};


export const createProduct = async (product) => { 
    const res = await fetch(`${API_BASE_URL}/products`, {
        method: "post",
        body: JSON.stringify(product),
        headers:{
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) throw new Error("Something went error");
	const data = await res.json();
	return data;
}

export const updateProduct = async (id, product) => { 
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "put",
        body: JSON.stringify(product),
        headers:{
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) throw new Error("Something went error");
	const data = await res.json();
	return data;
}

export const deleteProduct = async (id) => { 
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "delete",
    });
    if (!res.ok) throw new Error("Something went error");
	const data = await res.json();
	return data;
}


