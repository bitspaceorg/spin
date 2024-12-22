"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Combobox } from "./ui/combobox";
import { DatePicker } from "./ui/datePicker";
import { BACKEND_URL } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  date: z.string().nonempty("Date is required"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  age: z.string(),
  gender: z.enum(["Prefer Not To Say", "Male", "Female"]),
  blood_pressure: z.string(),
  heart_rate: z.string(),
  respiratory_rate: z.string(),
  temperature: z.string(),
  oxygen_saturation: z.string(),
  physician_information: z.string(),
  description: z.string(),
});

export default function PatientUpload() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: "",
      name: "",
      age: "",
      gender: "Prefer Not To Say",
      blood_pressure: "",
      heart_rate: "",
      respiratory_rate: "",
      temperature: "",
      oxygen_saturation: "",
      physician_information: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      formData.append("file", jsonBlob, "data.json");
      formData.append("type", "health");

      axios.defaults.withCredentials = true;
      await axios.post(BACKEND_URL + "/upload/file", formData);
      toast.success("Form submitted successfully!");
      form.reset({
        date: data.date,
        gender: data.gender,
      });
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Unable to upload.");
    }
  }

  return (
    <main className="w-full items-center justify-center min-h-[93vh] flex mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-60 w-[80%] shadow-xl border md:m-10"
        >
          <section className="w-full border h-[8rem] mb-6 bg-[#088675] flex justify-center px-6 flex-col gap-2">
            <span className="text-white text-4xl font-normal font-sans">
              Patient Health Assessment Form
            </span>
            <span className="text-white text-sm font-normal font-sans">
              Capture essential health metrics and details
            </span>
          </section>
          <section className="px-10 pb-10">
            <div className="flex justify-between">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex space-x-10 items-center">
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          setValue={form.setValue}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex space-x-10 items-center">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Combobox setValueForm={form.setValue} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blood_pressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Pressure</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blood pressure" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heart_rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heart Rate</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter heart rate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="respiratory_rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Respiratory Rate</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter respiratory rate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter temperature" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oxygen_saturation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Oxygen Saturation</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter oxygen saturation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="physician_information"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physician Information</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter physician information"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#088675] text-white px-3 py-1 mt-4"
            >
              Submit
            </Button>
          </section>
        </form>
      </Form>
    </main>
  );
}
