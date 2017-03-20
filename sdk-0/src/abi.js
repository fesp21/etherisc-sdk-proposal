const abi = {
  FlightDelay_AddressResolver_Abi: [
    {
      constant: true,
      inputs: [],
      name: 'getAddress',
      outputs: [
        {
          name: '_oaddr',
          type: 'address',
        },
      ],
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'addr',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{
        name: '',
        type: 'address',
      }, ],
      type: 'function',
    },
    {
      constant: false,
      inputs: [{
        name: '_newowner',
        type: 'address',
      }, ],
      name: 'changeOwner',
      outputs: [],
      type: 'function',
    },
    {
      constant: false,
      inputs: [{
        name: '_newaddr',
        type: 'address',
      }, ],
      name: 'setAddr',
      outputs: [],
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_addr',
          type: 'address',
        },
      ],
      type: 'constructor',
    },
  ],
  FlightDelay_Abi: [{
      constant: true,
      inputs: [{
        name: '',
        type: 'uint256',
      }],
      name: 'ledger',
      outputs: [{
        name: '',
        type: 'int256',
      }],
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maintenance_mode',
      outputs: [{
        name: '',
        type: 'uint8'
      }],
      type: 'function',
    },
    {
      constant: false,
      inputs: [{
        name: '_queryId',
        type: 'bytes32'
      }, {
        name: '_result',
        type: 'string'
      }, {
        name: '_proof',
        type: 'bytes'
      }],
      name: '__callback',
      outputs: [],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '',
        type: 'address'
      }, {
        name: '',
        type: 'uint256'
      }],
      name: 'customerPolicies',
      outputs: [{
        name: '',
        type: 'uint256'
      }],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '',
        type: 'bytes32'
      }],
      name: 'oraclizeCallbacks',
      outputs: [{
        name: 'policyId',
        type: 'uint256'
      }, {
        name: 'oState',
        type: 'uint8'
      }, {
        name: 'oraclizeTime',
        type: 'uint256'
      }],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '_customer',
        type: 'address'
      }],
      name: 'getCustomerPolicyCount',
      outputs: [{
        name: '_count',
        type: 'uint256'
      }],
      type: 'function',
    },
    {
      constant: false,
      inputs: [{
        name: '_from',
        type: 'uint8'
      }, {
        name: '_to',
        type: 'uint8'
      }, {
        name: '_amount',
        type: 'uint256'
      }],
      name: 'audit',
      outputs: [],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '_customer',
        type: 'address'
      }],
      name: 'getPolicyCount',
      outputs: [{
        name: '_count',
        type: 'uint256'
      }],
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'payReward',
      outputs: [],
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reentrantGuard',
      outputs: [{
        name: '',
        type: 'bool'
      }],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '',
        type: 'bytes32'
      }],
      name: 'risks',
      outputs: [{
        name: 'carrierFlightNumber',
        type: 'string'
      }, {
        name: 'departureYearMonthDay',
        type: 'string'
      }, {
        name: 'arrivalTime',
        type: 'uint256'
      }, {
        name: 'delayInMinutes',
        type: 'uint256'
      }, {
        name: 'delay',
        type: 'uint8'
      }, {
        name: 'cumulatedWeightedPremium',
        type: 'uint256'
      }, {
        name: 'premiumMultiplier',
        type: 'uint256'
      }],
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{
        name: '',
        type: 'address',
      }],
      type: 'function',
    },
    {
      constant: false,
      inputs: [{
        name: '_maintenance_mode',
        type: 'uint8'
      }],
      name: 'performHealthCheck',
      outputs: [],
      type: 'function',
    },
    {
      constant: true,
      inputs: [{
        name: '',
        type: 'uint256'
      }],
      name: 'policies',
      outputs: [{
        name: 'customer',
        type: 'address'
      }, {
        name: 'premium',
        type: 'uint256'
      }, {
        name: 'riskId',
        type: 'bytes32'
      }, {
        name: 'weight',
        type: 'uint256'
      }, {
        name: 'calculatedPayout',
        type: 'uint256'
      }, {
        name: 'actualPayout',
        type: 'uint256'
      }, {
        name: 'state',
        type: 'uint8'
      }, {
        name: 'stateTime',
        type: 'uint256'
      }, {
        name: 'stateMessage',
        type: 'bytes32'
      }, {
        name: 'proof',
        type: 'bytes'
      }],
      type: 'function',
    },
    {
      constant: false,
      'payable': true,
      inputs: [{
        name: '_carrierFlightNumber',
        type: 'string'
      }, {
        name: '_departureYearMonthDay',
        type: 'string'
      }, {
        name: '_departureTime',
        type: 'uint256'
      }, {
        name: '_arrivalTime',
        type: 'uint256'
      }],
      name: 'newPolicy',
      outputs: [],
      type: 'function',
    },
    {
      inputs: [{
        name: '_owner',
        type: 'address',
      }],
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'customer',
        type: 'address',
      }, {
        indexed: false,
        name: 'carrierFlightNumber',
        type: 'string',
      }, {
        indexed: false,
        name: 'premium',
        type: 'uint256',
      }],
      name: 'LOG_PolicyApplied',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics0',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics1',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics2',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics3',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics4',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'statistics5',
        type: 'uint256',
      }],
      name: 'LOG_PolicyAccepted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }],
      name: 'LOG_PolicyRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      }],
      name: 'LOG_PolicyPaidOut',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }],
      name: 'LOG_PolicyExpired',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'reason',
        type: 'bytes32',
      }],
      name: 'LOG_PolicyDeclined',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'reason',
        type: 'bytes32',
      }],
      name: 'LOG_PolicyManualPayout',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'reason',
        type: 'bytes32',
      }],
      name: 'LOG_SendFail',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'queryId',
        type: 'bytes32',
      }, {
        indexed: false,
        name: 'oraclize_url',
        type: 'string',
      }],
      name: 'LOG_OraclizeCall',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'policyId',
        type: 'uint256',
      }, {
        indexed: false,
        name: 'queryId',
        type: 'bytes32',
      }, {
        indexed: false,
        name: 'result',
        type: 'string',
      }, {
        indexed: false,
        name: 'proof',
        type: 'bytes',
      }],
      name: 'LOG_OraclizeCallback',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [{
        indexed: false,
        name: 'message',
        type: 'bytes32'
      }, {
        indexed: false,
        name: 'diff',
        type: 'int256'
      }, {
        indexed: false,
        name: 'balance',
        type: 'uint256'
      }, {
        indexed: false,
        name: 'ledgerBalance',
        type: 'int256'
      }],
      name: 'LOG_HealthCheck',
      type: 'event'
    }
  ],

  OAR_Abi: [{
    constant: false,
    inputs: [],
    name: 'getAddress',
    outputs: [{
      name: '_addr',
      type: 'address'
    }],
    type: 'function',
  }, {
    constant: true,
    inputs: [],
    name: 'addr',
    outputs: [{
      name: '',
      type: 'address'
    }],
    type: 'function',
  }],


  OraclizeI_Abi: [{
    constant: false,
    inputs: [{
      name: '_datasource',
      type: 'string'
    }, {
      name: 'gaslimit',
      type: 'uint256'
    }],
    name: 'getPrice',
    outputs: [{
      name: '_dsprice',
      type: 'uint256'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_datasource',
      type: 'string'
    }],
    name: 'getPrice',
    outputs: [{
      name: '_dsprice',
      type: 'uint256'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_coupon',
      type: 'string'
    }],
    name: 'useCoupon',
    outputs: [],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_proofType',
      type: 'bytes1'
    }],
    name: 'setProofType',
    outputs: [],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_timestamp',
      type: 'uint256'
    }, {
      name: '_datasource',
      type: 'string'
    }, {
      name: '_arg1',
      type: 'string'
    }, {
      name: '_arg2',
      type: 'string'
    }],
    name: 'query2',
    outputs: [{
      name: '_id',
      type: 'bytes32'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_timestamp',
      type: 'uint256'
    }, {
      name: '_datasource',
      type: 'string'
    }, {
      name: '_arg1',
      type: 'string'
    }, {
      name: '_arg2',
      type: 'string'
    }, {
      name: '_gaslimit',
      type: 'uint256'
    }],
    name: 'query2_withGasLimit',
    outputs: [{
      name: '_id',
      type: 'bytes32'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_timestamp',
      type: 'uint256'
    }, {
      name: '_datasource',
      type: 'string'
    }, {
      name: '_arg',
      type: 'string'
    }],
    name: 'query',
    outputs: [{
      name: '_id',
      type: 'bytes32'
    }],
    type: 'function',
  }, {
    constant: true,
    inputs: [],
    name: 'cbAddress',
    outputs: [{
      name: '',
      type: 'address'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_timestamp',
      type: 'uint256'
    }, {
      name: '_datasource',
      type: 'string'
    }, {
      name: '_arg',
      type: 'string'
    }, {
      name: '_gaslimit',
      type: 'uint256'
    }],
    name: 'query_withGasLimit',
    outputs: [{
      name: '_id',
      type: 'bytes32'
    }],
    type: 'function',
  }, {
    constant: false,
    inputs: [{
      name: '_gasPrice',
      type: 'uint256'
    }],
    name: 'setCustomGasPrice',
    outputs: [],
    type: 'function',
  }]
};

export default abi;