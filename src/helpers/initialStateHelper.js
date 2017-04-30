const initialState = () => ({
  rat:{
    row:0,
    column:0
  },
  panel:[
    [
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      }
    ],
    [
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: false,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: true,
        left: true,
        bottom: false,
        right: true
      }
    ],
    [
      {
        top: false,
        left: true,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: true
      },
      {
        top: false,
        left: true,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: true,
        left: false,
        bottom: true,
        right: false
      },
      {
        top: false,
        left: false,
        bottom: true,
        right: false
      }
    ]
  ]
});


export default {
  initialState,
  maxRow: () => initialState().panel.length,
  maxColumn: () => initialState().panel[0].length
}
