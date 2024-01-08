import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { useForm } from "react-hook-form";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";

const AddToList = () => {
  const { data, setData } = useContext(ProductContext);

  console.log("In the form, data: ", data);

  //   from react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formdata) => {
    console.log(formdata);
    formdata["Id"] = (Math.floor(Math.random() * 100) + 1).toString();
    console.log("random: ", formdata["Id"]);
    formdata["Price"] = parseFloat(formdata["Price"]);
    formdata["IsPopular"] = formdata.popularity === "true";
    formdata["IsRecommended"] = formdata.popularity === "false";
    // deleting the option coming from input tag, the option has been divided into the
    // two properties IsPopular and IsRecommended
    delete formdata["popularity"];
    console.log(formdata);

    //copying context api data into an array to add new item
    let arr = [...data];
    arr = [...arr, formdata];

    setData(arr);

    console.log(data);

    console.log("Modified Array: ", arr);

    toast.success("Added Item to the Carousel", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto md:w-full md:flex md:justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="mt-8 space-y-4 md:w-[500px]"
        >
          <div className="grid w-full  items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Item
            </label>
            <input
              {...register("Name", {
                required: "Name is required",
                pattern: {
                  value: /(^[a-z ]+$)/i,
                  message: "Please Enter a valid Item Name",
                },
              })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              id="name"
              placeholder="Item Name"
            />
            {errors.Name && (
              <p className="text-red-500 font-semibold">
                {errors.Name.message}
              </p>
            )}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="url"
            >
              URL
            </label>
            {/* regular expression for a valid url */}
            <input
              {...register("ImageUrl", {
                required: "URL is required",
                pattern: {
                  value:
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
                  message: "Please Enter a valid URL",
                },
              })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              id="url"
              placeholder="Enter Image URL"
            />

            {errors.ImageUrl && (
              <p className="text-red-500 font-semibold">
                {errors.ImageUrl.message}
              </p>
            )}
          </div>
          {/* option */}
          <div className="grid w-full  items-center gap-1.5">
            <div>
              <label
                htmlFor="options"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                {...register("popularity")}
                id="options"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value={true}>Popular</option>
                <option value={false}>Recommended</option>
              </select>
            </div>
          </div>
          {/* price */}
          <div className="grid w-full items-center gap-1.5">
            <div className="max-w-sm">
              <label
                htmlFor="number-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>

              <input
                {...register("Price", { required: "Price is required" })}
                type="text"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Price"
              />
              {errors.Price && (
                <p className="text-red-500 font-semibold">
                  {errors.Price.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add Item
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddToList;
