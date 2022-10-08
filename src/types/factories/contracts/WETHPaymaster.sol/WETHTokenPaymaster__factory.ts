/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WETHTokenPaymaster,
  WETHTokenPaymasterInterface,
} from "../../../contracts/WETHPaymaster.sol/WETHTokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_WETHToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "KnownWallets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETHToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "extraUnstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "walletCodeHash",
        type: "bytes32",
      },
    ],
    name: "addWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "walletCodeHash",
        type: "bytes32",
      },
    ],
    name: "removeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018503803806200185083398101604081905262000034916200017f565b828280620000428162000079565b506200004e82620000c9565b5050600280546001600160a01b0319166001600160a01b039290921691909117905550620001d39050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000d3620000f5565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b33620001096000546001600160a01b031690565b6001600160a01b031614620001645760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200017c57600080fd5b50565b6000806000606084860312156200019557600080fd5b8351620001a28162000166565b6020850151909350620001b58162000166565b6040850151909250620001c88162000166565b809150509250925092565b61166d80620001e36000396000f3fe6080604052600436106101295760003560e01c806397d06cec116100a5578063c23a5cea11610074578063d0e30db011610059578063d0e30db01461035f578063f2fde38b14610367578063f465c77e1461038757600080fd5b8063c23a5cea1461031c578063c399ec881461033c57600080fd5b806397d06cec1461027a578063a9a23409146102ba578063b0d691fe146102da578063bb9fe6bf1461030757600080fd5b80634e0f4c6b116100fc578063584465f2116100e1578063584465f21461021a578063715018a61461023a5780638da5cb5b1461024f57600080fd5b80634e0f4c6b146101da57806351cff8d9146101fa57600080fd5b80630396cb601461012e5780630ad1dee514610143578063205c2878146101635780634b2f336d14610183575b600080fd5b61014161013c366004611278565b6103b4565b005b34801561014f57600080fd5b5061014161015e36600461129c565b6104da565b34801561016f57600080fd5b5061014161017e3660046112d7565b61051b565b34801561018f57600080fd5b506002546101b09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101e657600080fd5b506101416101f536600461129c565b610597565b34801561020657600080fd5b50610141610215366004611303565b6105d5565b34801561022657600080fd5b50610141610235366004611303565b610722565b34801561024657600080fd5b50610141610771565b34801561025b57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff166101b0565b34801561028657600080fd5b506102aa61029536600461129c565b60036020526000908152604090205460ff1681565b60405190151581526020016101d1565b3480156102c657600080fd5b506101416102d5366004611320565b610785565b3480156102e657600080fd5b506001546101b09073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031357600080fd5b5061014161079f565b34801561032857600080fd5b50610141610337366004611303565b610825565b34801561034857600080fd5b506103516108b5565b6040519081526020016101d1565b61014161094d565b34801561037357600080fd5b50610141610382366004611303565b6109b9565b34801561039357600080fd5b506103a76103a23660046113af565b610a70565b6040516101d19190611403565b6103bc610dbd565b600154604080517f390b9978000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921691630396cb609134918591859163390b99789160048082019260209290919082900301816000875af115801561043a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045e9190611476565b61046891906114c2565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815263ffffffff9190911660048201526024016000604051808303818588803b1580156104be57600080fd5b505af11580156104d2573d6000803e3d6000fd5b505050505050565b6104e2610dbd565b600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b610523610dbd565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b1580156104be57600080fd5b61059f610dbd565b600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6105dd610dbd565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561064c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067091906114ea565b9050610680565b60405180910390fd5b6002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af11580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190611503565b505050565b61072a610dbd565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610779610dbd565b6107836000610e5a565b565b61078d610ecf565b61079984848484610ef3565b50505050565b6107a7610dbd565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561081157600080fd5b505af1158015610799573d6000803e3d6000fd5b61082d610dbd565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561089a57600080fd5b505af11580156108ae573d6000803e3d6000fd5b5050505050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610924573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094891906114ea565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561089a57600080fd5b6109c1610dbd565b73ffffffffffffffffffffffffffffffffffffffff8116610a64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610677565b610a6d81610e5a565b50565b606061afc88460a0013511610b07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f574554482d546f6b656e5061796d61737465723a2067617320746f6f206c6f7760448201527f20666f7220706f73744f700000000000000000000000000000000000000000006064820152608401610677565b8335610b166040860186611525565b159050610b2b57610b2685610fcd565b610c53565b6002546040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301523060248301528592169063dd62ed3e90604401602060405180830381865afa158015610ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc591906114ea565b1015610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f574554482d546f6b656e5061796d61737465723a206e6f7420656e6f7567682060448201527f616c6c6f77616e636500000000000000000000000000000000000000000000006064820152608401610677565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152859216906370a0823190602401602060405180830381865afa158015610cc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce791906114ea565b1015610d75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f574554482d546f6b656e5061796d61737465723a206e6f7420656e6f7567682060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610677565b610d826020860186611303565b6040805173ffffffffffffffffffffffffffffffffffffffff9092166020830152016040516020818303038152906040529150509392505050565b33610ddd60005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610677565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461078357600080fd5b6000610f0183850185611303565b60025490915073ffffffffffffffffffffffffffffffffffffffff166323b872dd8230610f30613a9887611591565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d29190611503565b6000610fdc6040830183611525565b6000906080610fee6040870187611525565b610ff99291506115a9565b92611006939291906115c0565b6040516110149291906115ea565b6040518091039020905060008280604001906110309190611525565b608061103f6040870187611525565b61104a9291506115a9565b6110559282906115c0565b61105e916115fa565b60015490915073ffffffffffffffffffffffffffffffffffffffff8083169116146110e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f77726f6e67207061796d617374657220696e20636f6e7374727563746f7200006044820152606401610677565b60006110f46040850185611525565b604061110287820188611525565b61110d9291506115a9565b6111189282906115c0565b611121916115fa565b60025490915073ffffffffffffffffffffffffffffffffffffffff8083169116146111a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f77726f6e6720746f6b656e20696e20636f6e7374727563746f720000000000006044820152606401610677565b60006111b76040860186611525565b60206111c66040890189611525565b6111d19291506115a9565b6111dc9282906115c0565b6111e5916115fa565b905073ffffffffffffffffffffffffffffffffffffffff811630146108ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f77726f6e67207061796d617374657220696e20636f6e7374727563746f7200006044820152606401610677565b63ffffffff81168114610a6d57600080fd5b60006020828403121561128a57600080fd5b813561129581611266565b9392505050565b6000602082840312156112ae57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a6d57600080fd5b600080604083850312156112ea57600080fd5b82356112f5816112b5565b946020939093013593505050565b60006020828403121561131557600080fd5b8135611295816112b5565b6000806000806060858703121561133657600080fd5b84356003811061134557600080fd5b9350602085013567ffffffffffffffff8082111561136257600080fd5b818701915087601f83011261137657600080fd5b81358181111561138557600080fd5b88602082850101111561139757600080fd5b95986020929092019750949560400135945092505050565b6000806000606084860312156113c457600080fd5b833567ffffffffffffffff8111156113db57600080fd5b840161016081870312156113ee57600080fd5b95602085013595506040909401359392505050565b600060208083528351808285015260005b8181101561143057858101830151858201604001528201611414565b81811115611442576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561148857600080fd5b815161129581611266565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff8083168185168083038211156114e1576114e1611493565b01949350505050565b6000602082840312156114fc57600080fd5b5051919050565b60006020828403121561151557600080fd5b8151801515811461129557600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261155a57600080fd5b83018035915067ffffffffffffffff82111561157557600080fd5b60200191503681900382131561158a57600080fd5b9250929050565b600082198211156115a4576115a4611493565b500190565b6000828210156115bb576115bb611493565b500390565b600080858511156115d057600080fd5b838611156115dd57600080fd5b5050820193919092039150565b8183823760009101908152919050565b80356020831015611631577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b9291505056fea2646970667358221220818ab581ca7c999c72572a4b7f29ac579f90ae76859cd7da1eb2f2b966d55ab964736f6c634300080c0033";

type WETHTokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETHTokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETHTokenPaymaster__factory extends ContractFactory {
  constructor(...args: WETHTokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    _WETHToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETHTokenPaymaster> {
    return super.deploy(
      _entryPoint,
      _owner,
      _WETHToken,
      overrides || {}
    ) as Promise<WETHTokenPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    _WETHToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _owner,
      _WETHToken,
      overrides || {}
    );
  }
  override attach(address: string): WETHTokenPaymaster {
    return super.attach(address) as WETHTokenPaymaster;
  }
  override connect(signer: Signer): WETHTokenPaymaster__factory {
    return super.connect(signer) as WETHTokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHTokenPaymasterInterface {
    return new utils.Interface(_abi) as WETHTokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHTokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as WETHTokenPaymaster;
  }
}