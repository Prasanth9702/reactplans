
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';

function App() {
 let plandetails = [{
    type: "FREE",
    price: "0",
    feature: [
      {
        name: "Single User",
        test: true
      },
      {
        name: "5GB Storage",
        test: true
      },
      {
        name: "Unlimited Public Projects",
        test: true
      },
      {
        name: "Community Access",
        test: true
      },
      {
        name: "Unlimited Private Projects",
        test: false
      },
      {
        name: "Dedicated Phone Support",
        test: false
      },
      {
        name: "Free Subdomain",
        test: false
      },
      {
        name: "Monthly Status Reports",
        test: false
      }
    ]
  }, {
    type: "PLUS",
    price: "9",
    feature: [
      {
        name1: "5 Users",
        test: true
      },
      {
        name: "50GB Storage",
        test: true
      },
      {
        name: "Unlimited Public Projects",
        test: true
      },
      {
        name: "Community Access",
        test: true
      },
      {
        name: "Unlimited Private Projects",
        test: true
      },
      {
        name: "Dedicated Phone Support",
        test: true
      },
      {
        name: "Free Subdomain",
        test: true
      },
      {
        name: "Monthly Status Reports",
        test: false
      }
    ]
  }, {
    type: "PRO",
    price: "49",
    feature: [
      {
        name1: "Unlimited Users",
        test: true
      },
      {
        name: "150GB Storage",
        test: true
      },
      {
        name: "Unlimited Public Projects",
        test: true
      }, {
        name: "Community Access",
        test: true
      },
      {
        name: "Unlimited Private Projects",
        test: true
      }, {
        name: "Dedicated Phone Support",
        test:true
      },
      {
        name1: "Unlimited",
        name: " Free Subdomains",
        test: true
      }, {
        name: "Monthly Status Reports",
        test: true
      }
    ]
  }
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            plandetails.map((appvalue) => {
              return <Card cvalue={appvalue}></Card>
            })
          }
        </div>
      </div>
    </section>
  );

}


export default App;
