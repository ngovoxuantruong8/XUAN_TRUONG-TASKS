/* fetch("https://63fec577571200b7b7cf9150.mockapi.io/task", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            // handle error
            throw new Error("error");
        })
        .then((tasks) => {
            // Do something with the list of tasks
            console.log(tasks);
        })
        .catch((error) => {
            // handle error
            console.log(error.message);
        }); */

/* const fetchData = async () => {
        const response = await fetch("https://63fec577571200b7b7cf9150.mockapi.io/task");

        try {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    fetchData(); */
