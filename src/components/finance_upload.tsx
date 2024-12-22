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
import { DatePicker } from "./ui/datePicker";
import { BACKEND_URL } from "@/lib/utils";

const FormSchema = z.object({
  date: z.string().nonempty("Date is required"),
  patient_name: z.string().min(3, "Patient name must be at least 3 characters"),
  total_charges: z.string().nonempty("Total charges are required"),
  insurance_provider: z.string().nonempty("Insurance provider is required"),
  billing_clerk_information: z.string().nonempty("Billing clerk information is required"),
  physician_charges: z.string().nonempty("Physician charges are required"),
  lab_tests_charges: z.string().nonempty("Lab test charges are required"),
  medication_charges: z.string().nonempty("Medication charges are required"),
});

export default function FinanceUpload() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: "",
      patient_name: "",
      total_charges: "",
      insurance_provider: "",
      billing_clerk_information: "",
      physician_charges: "",
      lab_tests_charges: "",
      medication_charges: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
    try {
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      formData.append("file", jsonBlob, "data.json");
      formData.append("type", "bills");

      axios.defaults.withCredentials = true;
      await axios.post(BACKEND_URL + "/upload/file", formData);
      toast.success("Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Unable to upload.");
    }
  }

  return (
    <main className="w-full items-center justify-center min-h-[93vh] flex mt-10 space-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-60 w-[80%] shadow-xl border md:m-10"
        >
          <section className="w-full border h-[8rem] mb-6 bg-[#088675] flex justify-center px-6 flex-col gap-2">
            <span className="text-white text-4xl font-normal font-sans">
              Financial Information Form
            </span>
            <span className="text-white text-sm font-normal font-sans">
              Manage and track patient billing, insurance, and payment details efficiently.
            </span>
          </section>
          <section className="px-10 pb-10">
            <FormField
              control={form.control}
              name="date"
              render={() => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker setValue={form.setValue} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patient_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter patient name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="total_charges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Charges</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter total charges" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="insurance_provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance Provider</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter insurance provider" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing_clerk_information"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billing Clerk Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter billing clerk name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="physician_charges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physician Charges</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter physician charges" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lab_tests_charges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lab Tests Charges</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter lab test charges" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medication_charges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medication Charges</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter medication charges" {...field} />
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
