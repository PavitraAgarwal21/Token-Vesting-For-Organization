import { useState, useEffect } from "react";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";
import OrganisationsList from "@/components/OrganisationList";

function Register() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [organisations, setOrganisations] = useState([]);
  const [registering, setRegistering] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);

  const { data: organisationsData, isError: organisationsError } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: "getOrganisations",
    watch: true,
  });

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "registerOrganisation",
    args: [name, symbol],
  });

  const { write: register } = useContractWrite(config);

  const waitForTransaction = useWaitForTransaction({
    hash: transactionHash,
  });

  const registerOrganisation = (e) => {
    e.preventDefault();
    setRegistering(true);
    register().then((response) => {
      setTransactionHash(response.hash);
    });
  };

  const handleOrgNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOrgSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  useEffect(() => {
    if (organisationsError) {
      console.log(organisationsError);
    } else {
      setOrganisations(organisationsData);
    }
  }, [organisationsData, organisationsError]);

  return (
    <main className="container mx-auto px-4 py-10">
  <div className="max-w-md mx-auto bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-md mb-10">
    <h1 className="text-3xl font-bold text-white mb-5">Register your Organisation</h1>
    <form className="space-y-4">
      <div>
        <label htmlFor="orgName" className="block text-lg font-semibold text-white mb-1">
          Organization Name:
        </label>
        <input
          id="orgName"
          type="text"
          value={name}
          onChange={handleOrgNameChange}
          className="w-full bg-gray-100 border border-gray-400 p-2 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="orgSymbol" className="block text-lg font-semibold text-white mb-1">
          Organization Symbol:
        </label>
        <input
          id="orgSymbol"
          type="text"
          value={symbol}
          onChange={handleOrgSymbolChange}
          className="w-full bg-gray-100 border border-gray-400 p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        onClick={registerOrganisation}
        disabled={!name || !symbol || waitForTransaction.isLoading || registering}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        {waitForTransaction.isLoading ? "Transacting....." : registering ? "Check Wallet" : "Register"}
      </button>
    </form>
  </div>
  <div>
    <h1 className="text-3xl font-bold mb-5">Organisations</h1>
    {organisations && organisations.length > 0 ? (
      <OrganisationsList organisations={organisations} />
    ) : (
      <p>No organisations found.</p>
    )}
  </div>
</main>

);
}
export default Register;

