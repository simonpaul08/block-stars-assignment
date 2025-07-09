import { useEffect, useState } from "react"


const HeadNTail = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [submitState, setSubmitState] = useState([]);
    const [resultState, setResultState] = useState([]);


    // convert into columns
    function ConvertIntoColumns(arr) {

        let col = 1;
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                obj[col] = [arr[i]]
            }
            else if (arr[i] === arr[i - 1]) {
                obj[col].push(arr[i])
            } else {
                col = col + 1;
                obj[col] = [arr[i]]
            }
        }

        return Object.values(obj)
    }


    // handle value change
    const handleValueChange = (e) => {
        setValue(e.target.value);
        setError(false);
    }

    // handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (value === "") {
            setError(true)
            return
        }

        setSubmitState(prev => [...prev, value])

        setValue("");
        setError(false);
    }

    useEffect(() => {
        if(submitState.length > 0) {
            const convertedArr = ConvertIntoColumns(submitState)
            setResultState(convertedArr)
        }
    }, [submitState])

    return (
        <div className='w-full'>
            <div className="max-w-[1200px] mx-auto py-6 flex-col justify-between items-center px-4">

                {/* Form */}
                <form method="POST" className="w-full mb-4" onSubmit={handleSubmit}>
                    <div className="w-full py-2 mb-4">
                        <div className="inline-block py-2 border border-gray-300 pr-3 rounded-md mb-2">
                            <select name="select" id="select"
                                className="w-[200px] cursor-pointer px-3 outline-none"
                                value={value}
                                onChange={handleValueChange}
                            >
                                <option value="" selected disabled>Select Value</option>
                                <option value={"H"}>H</option>
                                <option value={"T"}>T</option>
                            </select>
                        </div>
                        {error && <p className="text-[12px] text-red-600">Please select value from dropdown</p>}
                    </div>

                    <button type="submit"
                        className="px-8 text-center py-2 text-[16px] bg-blue-400 rounded-md text-white"
                    >Submit</button>
                </form>

                {/* Result Grid */}
                <div className="flex">
                    {
                        resultState.length !== 0 && resultState.map(result => {
                            return (
                                <div className="p-2">
                                    {result?.map(char => {
                                        return (
                                            <p className="text-[16px]">{char}</p>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeadNTail