import { useEffect } from "react";
import {
  CheckCircle,
  ChevronDown,
  DollarSign,
  Eye,
  Globe,
  HelpCircle,
  Home,
  Landmark,
  LayoutGrid,
  LogIn,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Shield,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FallbackComponent } from "./CustomComponents";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 flex flex-col w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-12 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-lg bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                <Landmark className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">
                  GoodGov Portal
                </span>
                <span className="text-[#71717b] text-xs leading-4">{`Transparency & Accountability`}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-lg gap-2">
                <Globe className="size-4" />
                EN
              </Button>
              <Button className="rounded-lg bg-[#2b7fff] text-blue-50 gap-2">
                <LogIn className="size-4" />
                Sign In
              </Button>
            </div>
          </div>
          <nav className="flex px-12 justify-start items-center gap-1">
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <Home className="size-4" />
              Home
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <DollarSign className="size-4" />
              {`Budget & Expenditure`}
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <Eye className="size-4" />
              Transparency
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <Users className="size-4" />
              Public Figures
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <Shield className="size-4" />
              Central KYC
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <MessageSquare className="size-4" />
              Complaints
            </div>
            <div className="cursor-pointer font-medium text-[#71717b] text-sm leading-5 flex px-3 py-4 items-center gap-2">
              <CheckCircle className="size-4" />
              Accountability
            </div>
            <div className="cursor-pointer font-semibold text-[#2b7fff] text-sm leading-5 border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-4 items-center gap-2">
              <HelpCircle className="size-4" />
              FAQ
            </div>
          </nav>
        </header>
        <main className="flex-1 w-full">
          <section className="relative bg-[#2b7fff] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1627397159237-d2acb7f500af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBjb2x1bW5zfGVufDF8MHx8fDE3ODU4NDg2MTV8MA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Government building"
              className="object-cover absolute inset-0 w-full h-full"
              data-photoid="1Hx3VqgApkI"
              data-authorname="Joel Durkee"
              data-authorurl="https://unsplash.com/@joeldurkee"
              data-blurhash="LBNAuD}+.8nN$brUxatRMwkC%Lo~"
            />
            <div className="bg-[#2b7fff]/80 absolute inset-0" />
            <div className="relative text-center flex p-12 flex-col items-center gap-4">
              <Badge className="rounded-full bg-blue-50/15 text-blue-50 border-black/1 border-0 border-solid gap-2">
                <HelpCircle className="size-3.5" />
                Help Center
              </Badge>
              <h1 className="font-bold text-blue-50 text-4xl leading-10 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="max-w-2xl text-blue-50/80 text-sm leading-5">
                Find clear answers about budget transparency, KYC verification,
                complaints handling and public accountability across our
                governance services.
              </p>
              <div className="max-w-xl relative mt-2 w-full">
                <Search className="top-1/2 -translate-y-1/2 size-5 text-[#71717b] absolute left-4" />
                <Input
                  placeholder="Search questions..."
                  className="shadow-lg rounded-xl bg-white text-zinc-950 border-black/1 border-0 border-solid pl-12 pr-4 h-12"
                  defaultValue=""
                />
              </div>
              <p className="text-blue-50/80 text-xs leading-4 hidden">
                Filtering results for ""
              </p>
            </div>
          </section>
          <div className="flex p-12 flex-col gap-8">
            <div className="flex justify-center items-center">
              <Tabs className="w-fit" defaultValue="all">
                <TabsList className="rounded-xl">
                  <TabsTrigger value="all" className="rounded-lg gap-2">
                    <LayoutGrid className="size-4" />
                    All
                  </TabsTrigger>
                  <TabsTrigger value="budget" className="rounded-lg gap-2">
                    <DollarSign className="size-4" />
                    Budget Transparency
                  </TabsTrigger>
                  <TabsTrigger value="kyc" className="rounded-lg gap-2">
                    <Shield className="size-4" />
                    KYC
                  </TabsTrigger>
                  <TabsTrigger value="complaints" className="rounded-lg gap-2">
                    <MessageSquare className="size-4" />
                    Complaints
                  </TabsTrigger>
                  <TabsTrigger
                    value="accountability"
                    className="rounded-lg gap-2"
                  >
                    <CheckCircle className="size-4" />
                    Accountability
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <DollarSign className="size-4" />
                  </div>
                  <h2 className="font-semibold text-zinc-950 text-lg leading-7">
                    Budget Transparency
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        How is the annual public budget allocated across
                        departments?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-6 py-4">
                      The annual budget is allocated through a transparent,
                      participatory process. Each department submits proposals
                      reviewed by the Budget Committee. Final allocations are
                      published in the open data portal alongside quarterly
                      expenditure reports, allowing citizens to track how every
                      allocation is spent.
                    </div>
                  </Card>
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        Where can I view detailed expenditure records?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">{`Detailed expenditure records are available under the Budget & Expenditure section. You can filter by year, department and project, and download machine-readable datasets. All records are updated monthly and independently audited.`}</div>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <Shield className="size-4" />
                  </div>
                  <h2 className="font-semibold text-zinc-950 text-lg leading-7">
                    Central KYC
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        What is Central KYC and why do I need to register?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Central KYC (Know Your Customer) is a unified identity
                      verification system that lets you access all governance
                      services with a single verified profile. Registration
                      prevents fraud, ensures accurate records and removes the
                      need to re-submit documents for each service.
                    </div>
                  </Card>
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        How is my personal data protected during KYC?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Your data is encrypted at rest and in transit using
                      industry-standard protocols. Access is strictly role-based
                      and every access event is logged. You retain the right to
                      review, correct and request deletion of your data under
                      our privacy framework.
                    </div>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <MessageSquare className="size-4" />
                  </div>
                  <h2 className="font-semibold text-zinc-950 text-lg leading-7">
                    Complaints
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        How do I file a complaint and track its status?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Visit the Complaints section, choose a category and submit
                      your report with any supporting evidence. You will receive
                      a unique tracking ID to monitor progress in real time.
                      Most complaints receive an initial response within 72
                      hours.
                    </div>
                  </Card>
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        Can I submit an anonymous complaint?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Yes. Anonymous submissions are supported and protected
                      under our whistleblower policy. While anonymity may limit
                      follow-up communication, every report is investigated with
                      the same diligence and confidentiality.
                    </div>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <CheckCircle className="size-4" />
                  </div>
                  <h2 className="font-semibold text-zinc-950 text-lg leading-7">
                    Accountability
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        How are public officials held accountable for decisions?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Officials publish declarations of interest and are subject
                      to independent oversight committees. Key decisions,
                      contracts and performance metrics are published in the
                      Accountability dashboard, and citizens can request formal
                      reviews of any decision.
                    </div>
                  </Card>
                  <Card className="rounded-xl border-zinc-200 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <button className="text-left flex px-6 py-4 justify-between items-center gap-4">
                      <span className="font-medium text-sm leading-5">
                        Where can I find audit reports and performance reviews?
                      </span>
                      <ChevronDown />
                    </button>
                    <div className="leading-relaxed text-[#71717b] text-sm leading-5 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid hidden px-6 py-4">
                      Independent audit reports and annual performance reviews
                      are published in the Transparency section. Each report
                      includes findings, recommendations and the status of
                      remedial actions, all available for download.
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <Card className="relative rounded-2xl bg-[#2b7fff] border-black/1 border-0 border-solid p-0 gap-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBoZWxwaW5nJTIwY29tbXVuaXR5JTIwc3VwcG9ydCUyMGNvbnZlcnNhdGlvbnxlbnwxfDB8fHwxNzg1ODQ4NjI2fDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Support team"
                className="object-cover absolute inset-0 w-full h-full"
                data-photoid="W3Jl3jREpDY"
                data-authorname="LinkedIn Sales Solutions"
                data-authorurl="https://unsplash.com/@linkedinsalesnavigator"
                data-blurhash="LbNK9R^+-;f,?va|t8og~qIWITj="
              />
              <div className="bg-[#2b7fff]/85 absolute inset-0" />
              <div className="relative flex px-12 py-8 justify-between items-center gap-8">
                <div className="max-w-lg flex flex-col gap-2">
                  <h3 className="font-bold text-blue-50 text-2xl leading-8">
                    Still have questions?
                  </h3>
                  <p className="text-blue-50/80 text-sm leading-5">{`Can't find the answer you're looking for? Reach out through our Complaint & Suggestion channel and our governance team will respond promptly.`}</p>
                </div>
                <Button className="shrink-0 rounded-xl bg-white text-[#2b7fff] gap-2 h-12">
                  <MessageSquare className="size-4" />
                  Submit a Complaint / Suggestion
                </Button>
              </div>
            </Card>
            <div className="flex justify-center items-center gap-4">
              <span className="text-[#71717b] text-sm leading-5">
                Was this page helpful?
              </span>
              <Button className="rounded-lg gap-2">
                <ThumbsUp className="size-4" />
                Yes
              </Button>
              <Button variant="outline" className="rounded-lg gap-2">
                <ThumbsDown className="size-4" />
                No
              </Button>
              <span className="font-medium text-[#2b7fff] text-sm leading-5 hidden">
                Thanks for your feedback!
              </span>
            </div>
          </div>
        </main>
        <footer className="bg-zinc-100 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid w-full">
          <div className="grid grid-cols-4 p-12 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-lg bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                  <Landmark className="size-5" />
                </div>
                <span className="font-bold text-zinc-950 text-base leading-6">
                  GoodGov Portal
                </span>
              </div>
              <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                Promoting transparency, accountability and good governance for
                every citizen.
              </p>
              <div className="flex items-center gap-2">
                <div className="size-8 cursor-pointer rounded-lg bg-white text-[#71717b] flex justify-center items-center">
                  <FallbackComponent className="size-4" />
                </div>
                <div className="size-8 cursor-pointer rounded-lg bg-white text-[#71717b] flex justify-center items-center">
                  <FallbackComponent className="size-4" />
                </div>
                <div className="size-8 cursor-pointer rounded-lg bg-white text-[#71717b] flex justify-center items-center">
                  <FallbackComponent className="size-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-zinc-950 text-sm leading-5">
                Governance
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">{`Budget & Expenditure`}</span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Transparency
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Public Figures
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Accountability
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-zinc-950 text-sm leading-5">
                Services
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Central KYC
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Complaints
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                FAQ
              </span>
              <span className="cursor-pointer text-[#71717b] text-sm leading-5">
                Open Data
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-zinc-950 text-sm leading-5">
                Contact
              </span>
              <div className="text-[#71717b] text-sm leading-5 flex items-center gap-2">
                <Mail className="size-4 text-[#2b7fff]" />
                support@goodgov.org
              </div>
              <div className="text-[#71717b] text-sm leading-5 flex items-center gap-2">
                <Phone className="size-4 text-[#2b7fff]" />
                +1 (800) 555-0199
              </div>
              <div className="text-[#71717b] text-sm leading-5 flex items-center gap-2">
                <MapPin className="size-4 text-[#2b7fff]" />
                100 Civic Center Plaza
              </div>
            </div>
          </div>
          <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-12 py-4 justify-between items-center">
            <span className="text-[#71717b] text-xs leading-4">
              © 2025 GoodGov Portal. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <span className="cursor-pointer text-[#71717b] text-xs leading-4">
                Privacy Policy
              </span>
              <span className="cursor-pointer text-[#71717b] text-xs leading-4">
                Terms of Service
              </span>
              <span className="cursor-pointer text-[#71717b] text-xs leading-4">
                Accessibility
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
