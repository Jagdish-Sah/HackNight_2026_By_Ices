import { useEffect } from "react";
import {
  BadgeCheck,
  Calendar,
  CheckCircle,
  DollarSign,
  Download,
  Eye,
  FileText,
  Filter,
  HelpCircle,
  Home,
  Info,
  Landmark,
  Lock,
  MessageSquare,
  Moon,
  Search,
  Shield,
  ShieldCheck,
  Star,
  Sun,
  User,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <div>
      <div className="flex flex-col w-285 h-239 overflow-hidden h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex flex-col">
          <div className="bg-[#2b7fff] text-blue-50 flex px-8 py-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-xl bg-blue-50/15 flex justify-center items-center">
                <Landmark className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-bold text-lg leading-7">
                  Public Officials Financial Disclosure
                </span>
                <span className="text-blue-50/70 text-xs leading-4">{`Office of Good Governance & Public Transparency`}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-50/10 flex px-3 py-1.5 items-center gap-2">
                <ShieldCheck className="size-4" />
                <span className="font-medium text-xs leading-4">
                  Verified Registry
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full text-blue-50"
              >
                <Sun className="size-4 hidden" />
                <Moon className="size-4" />
              </Button>
            </div>
          </div>
          <nav className="bg-white flex px-8 justify-start items-center gap-1">
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Home className="size-4" />
              Home
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <DollarSign className="size-4" />
              {`Budget & Expenditure`}
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Eye className="size-4" />
              Transparency
            </button>
            <button className="font-semibold text-[#2b7fff] text-sm leading-5 border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Users className="size-4" />
              Public Figures
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Shield className="size-4" />
              Central KYC
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <MessageSquare className="size-4" />
              Complaints
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <CheckCircle className="size-4" />
              Accountability
            </button>
            <button className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <HelpCircle className="size-4" />
              FAQ
            </button>
          </nav>
        </header>
        <div className="overflow-y-auto flex-1">
          <div className="flex p-8 flex-col gap-6">
            <div className="rounded-2xl bg-white border-zinc-200 border-1 border-solid flex p-6 flex-col gap-4">
              <div className="flex justify-between items-end gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-2xl leading-8 tracking-tight">
                    Search Financial Disclosures
                  </h1>
                  <p className="text-[#71717b] text-sm leading-5">
                    Look up declared assets, income, and liabilities of public
                    officials.
                  </p>
                </div>
                <div className="text-[#71717b] text-sm leading-5 flex items-center gap-2">
                  <FileText className="size-4 text-[#2b7fff]" />
                  <span>
                    <span className="font-semibold text-zinc-950">1,284</span>
                    disclosures on record
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="top-1/2 -translate-y-1/2 size-4 text-[#71717b] absolute left-3" />
                  <Input
                    placeholder="Search by name or position..."
                    className="pl-9 h-11"
                    defaultValue=""
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-44 h-11">
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="legislative">Legislative</SelectItem>
                    <SelectItem value="judicial">Judicial</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-36 h-11">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#2b7fff] text-blue-50 px-6 h-11">
                  <Filter className="size-4" />
                  Apply
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1696960181436-1b6d9576354e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvbGl0aWNpYW4lMjBwb3J0cmFpdHxlbnwxfDJ8fHwxNzg1ODQ4NjIwfDA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Portrait of Amara Okonkwo"
                        className="object-cover w-full h-full"
                        data-photoid="T7XG8QAn0Mw"
                        data-authorname="Julia Potter"
                        data-authorurl="https://unsplash.com/@juliapotter"
                        data-blurhash="LJKxG34m?v%M?b%MIoRjR*ofs:WW"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Amara Okonkwo
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Minister of Finance
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Executive
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2024
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                      <User className="size-7 text-[#71717b]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Daniel Reyes
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Senator, 3rd District
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Legislative
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2024
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                      <User className="size-7 text-[#71717b]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Helena Voss
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Supreme Court Justice
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Judicial
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2023
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                      <User className="size-7 text-[#71717b]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Marcus Chen
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Governor, Northern Province
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Executive
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2024
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                      <User className="size-7 text-[#71717b]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Sophia Adeyemi
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Attorney General
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Executive
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2023
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-5 gap-4">
                <CardHeader className="flex p-0 flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-16 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                      <User className="size-7 text-[#71717b]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="leading-tight font-semibold">
                        Rajiv Malhotra
                      </span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Member of Parliament
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-1 w-fit"
                      >
                        Legislative
                      </Badge>
                    </div>
                  </div>
                  <Star />
                </CardHeader>
                <CardContent className="text-[#71717b] text-xs leading-4 flex p-0 justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    FY 2024
                  </span>
                  <span className="font-medium text-[#2b7fff] flex items-center gap-1">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-[#2b7fff] text-blue-50 w-full">
                    <Eye className="size-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <footer className="bg-white border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-8 py-6 flex-col gap-4">
            <div className="rounded-xl bg-zinc-100 flex p-4 items-start gap-3">
              <Info className="size-5 shrink-0 text-[#2b7fff]" />
              <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                Disclaimer: All financial disclosure records are self-declared
                by public officials and verified against official filings. While
                every effort is made to ensure data authenticity, the Office of
                Good Governance does not guarantee absolute accuracy. Records
                are provided for transparency and public interest purposes only.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#71717b] text-xs leading-4 flex items-center gap-6">
                <a className="cursor-pointer">{`Budget & Expenditure`}</a>
                <a className="cursor-pointer">Transparency Portal</a>
                <a className="cursor-pointer">Central KYC</a>
                <a className="cursor-pointer">File a Complaint</a>
                <a className="cursor-pointer">Accountability Reports</a>
              </div>
              <span className="text-[#71717b] text-xs leading-4">
                © 2024 Office of Good Governance
              </span>
            </div>
          </footer>
        </div>
        <div className="z-50 bg-zinc-950/40 hidden absolute inset-0 p-8 justify-center items-center">
          <div className="max-h-[820px] shadow-2xl rounded-2xl bg-white border-zinc-200 border-1 border-solid flex flex-col w-180 overflow-hidden">
            <div className="bg-[#2b7fff] text-blue-50 flex px-6 py-4 justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-blue-50/15 flex justify-center items-center">
                  <FileText className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight font-bold text-base leading-6">
                    Financial Disclosure Details
                  </span>
                  <span className="text-blue-50/70 text-xs leading-4">
                    Disclosure Year: FY 2024 · Ref #GG-2024-001
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full text-blue-50"
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
              <div className="size-14 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                <User className="size-6 text-[#71717b]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold">Public Official Profile</span>
                <span className="text-[#71717b] text-xs leading-4">
                  Declared Net Worth:
                  <span className="font-semibold text-zinc-950">
                    $2,340,000
                  </span>
                </span>
              </div>
              <Badge className="bg-[#2b7fff] text-blue-50 ml-auto">
                <BadgeCheck className="size-3.5" />
                Verified
              </Badge>
            </div>
            <div className="px-6 pt-4">
              <Tabs defaultValue="income">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="income">Income</TabsTrigger>
                  <TabsTrigger value="assets">Assets</TabsTrigger>
                  <TabsTrigger value="liabilities">Liabilities</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="overflow-y-auto p-6 flex-1">
              <div className="rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                <table className="text-sm leading-5 w-full">
                  <thead>
                    <tr className="text-left bg-[#2b7fff] text-blue-50">
                      <th className="font-medium px-4 py-3">Income Source</th>
                      <th className="font-medium px-4 py-3">Type</th>
                      <th className="font-medium text-right px-4 py-3">
                        Annual Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Government Salary</td>
                      <td className="text-[#71717b] px-4 py-3">
                        Public Office
                      </td>
                      <td className="font-medium text-right px-4 py-3">
                        $185,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/40 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Investment Dividends</td>
                      <td className="text-[#71717b] px-4 py-3">Passive</td>
                      <td className="font-medium text-right px-4 py-3">
                        $62,400
                      </td>
                    </tr>
                    <tr className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Rental Property Income</td>
                      <td className="text-[#71717b] px-4 py-3">Real Estate</td>
                      <td className="font-medium text-right px-4 py-3">
                        $48,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/40">
                      <td className="px-4 py-3">Consulting (Pre-office)</td>
                      <td className="text-[#71717b] px-4 py-3">Professional</td>
                      <td className="font-medium text-right px-4 py-3">
                        $21,000
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-[#2b7fff] border-t-2 border-r-0 border-b-0 border-l-0 border-solid">
                      <td className="font-semibold px-4 py-3" colSpan={2}>
                        Total Declared Income
                      </td>
                      <td className="font-bold text-right text-[#2b7fff] px-4 py-3">
                        $316,400
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="rounded-xl border-zinc-200 border-1 border-solid hidden overflow-hidden">
                <table className="text-sm leading-5 w-full">
                  <thead>
                    <tr className="text-left bg-[#2b7fff] text-blue-50">
                      <th className="font-medium px-4 py-3">Declared Asset</th>
                      <th className="font-medium px-4 py-3">Category</th>
                      <th className="font-medium text-right px-4 py-3">
                        Est. Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Primary Residence</td>
                      <td className="text-[#71717b] px-4 py-3">Real Estate</td>
                      <td className="font-medium text-right px-4 py-3">
                        $1,250,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/40 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Equity Portfolio</td>
                      <td className="text-[#71717b] px-4 py-3">Securities</td>
                      <td className="font-medium text-right px-4 py-3">
                        $820,000
                      </td>
                    </tr>
                    <tr className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Vehicles (2)</td>
                      <td className="text-[#71717b] px-4 py-3">Movable</td>
                      <td className="font-medium text-right px-4 py-3">
                        $135,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/40">
                      <td className="px-4 py-3">Bank Deposits</td>
                      <td className="text-[#71717b] px-4 py-3">Cash</td>
                      <td className="font-medium text-right px-4 py-3">
                        $410,000
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-[#2b7fff] border-t-2 border-r-0 border-b-0 border-l-0 border-solid">
                      <td className="font-semibold px-4 py-3" colSpan={2}>
                        Total Declared Assets
                      </td>
                      <td className="font-bold text-right text-[#2b7fff] px-4 py-3">
                        $2,615,000
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="rounded-xl border-zinc-200 border-1 border-solid hidden overflow-hidden">
                <table className="text-sm leading-5 w-full">
                  <thead>
                    <tr className="text-left bg-[#2b7fff] text-blue-50">
                      <th className="font-medium px-4 py-3">Liability</th>
                      <th className="font-medium px-4 py-3">Lender</th>
                      <th className="font-medium text-right px-4 py-3">
                        Outstanding
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                      <td className="px-4 py-3">Home Mortgage</td>
                      <td className="text-[#71717b] px-4 py-3">
                        National Bank
                      </td>
                      <td className="font-medium text-right px-4 py-3">
                        $215,000
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/40">
                      <td className="px-4 py-3">Personal Loan</td>
                      <td className="text-[#71717b] px-4 py-3">Credit Union</td>
                      <td className="font-medium text-right px-4 py-3">
                        $60,000
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-[#2b7fff] border-t-2 border-r-0 border-b-0 border-l-0 border-solid">
                      <td className="font-semibold px-4 py-3" colSpan={2}>
                        Total Liabilities
                      </td>
                      <td className="font-bold text-right text-[#2b7fff] px-4 py-3">
                        $275,000
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-6 py-4 justify-between items-center gap-3">
              <span className="text-[#71717b] text-xs leading-4 flex items-center gap-2">
                <Lock className="size-3.5" />
                Records certified by the Public Ethics Commission
              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Download className="size-4" />
                  Export PDF
                </Button>
                <Button className="bg-[#2b7fff] text-blue-50">Close</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
