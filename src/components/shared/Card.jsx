

function Card({jobListing}) {

  const toggleColours = (e) => {
    e.target.classList.toggle('selected')
  }
  

  return (
    <div>
    
    <img src={jobListing.logo} alt={`${jobListing.company} logo`} className="smallLogo"
    style={{
      'width': '80px',
      'height': '80px',
      'position': 'relative',
      'top': '55px',
      'left': '25px',
    }}/>
    
    <div className='card' >
      <img src={jobListing.logo} alt={`${jobListing.company} logo`} className='largeLogo'
      style={{
        'width': '100px',
        'height': '100px',
      }}/>
      
        <div className="card-left">
          <div>
            <h3 style={{
              'display': 'inline',
              'fontWeight': '700',
            }}>{jobListing.company}</h3>
          {jobListing.new && <span className='label' style={{
            'backgroundColor': 'hsl(180, 29%, 50%)',
          }}>NEW!</span>}
          {jobListing.featured && <span className='label' style={{
            'backgroundColor': 'hsl(180, 14%, 20%)',
          }}>FEATURED</span>}
          </div>
          <h4 style={{
            'color': 'hsl(180, 14%, 20%)',
          }}>{jobListing.position}</h4>
          {[jobListing.postedAt, jobListing.contract, jobListing.location].map((item, index) => (
              <p key={index} style={{
                'display': 'inline',
                'color': 'hsl(180, 8%, 52%)',
              }}>{item}
              {index !== 2 && 
                <span style={{
                  'color': 'hsl(180, 8%, 52%)',
                  'margin': '0 8px',
                }}>&#x2022;{}</span>}
              </p>
          ))}
        </div>

        <hr />

        <div className="card-right">
          {[jobListing.role, jobListing.level, ...jobListing.languages, ...jobListing.tools].map((item) => (
            <span onClick={toggleColours} key={item} className='tag'>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card