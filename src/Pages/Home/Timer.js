import { useEffect, useState } from 'react';

const Timer = () => {
	const [days, setDay] = useState();
	const [hours, setHour] = useState();
	const [mins, setMin] = useState();
	const [secs, setSec] = useState();

	let interval;

	const counDown = () => {
		const destination = new Date('Oct 7, 2022').getTime();
		interval = setInterval(() => {

			const now = new Date().getTime();

			const different = destination - now

			const days = Math.floor(different / (1000 * 60 * 60 * 24))

			const hours = Math.floor(
				(different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);

			const mins = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

			const secs = Math.floor((different % (1000 * 60)) / 1000);

            if(destination < 0 ){
            clearInterval(interval.current)
            } else {
                setDay(days);
                setHour(hours);
                setMin(mins);
                setSec(secs)
            }
		});
	};

    useEffect(()=> {
        counDown()
    })
	return (
		<>
			<div className='--flex-center --gap'>
				<div className='--flex-center --gap'>
					<div className='--text-light'>
						<h3>{days}</h3>
						<h4>Days</h4>
					</div>

					<div>
						<span className='--text-light' style={{ fontSize: 25 }}>
							:
						</span>
					</div>
				</div>

				<div className='--flex-center --gap --py2'>
					<div className='--text-light'>
						<h3>{hours}</h3>
						<h4>Hours</h4>
					</div>

					<div>
						<span className='--text-light' style={{ fontSize: 25 }}>
							:
						</span>
					</div>
				</div>

				<div className='--flex-center --gap --py2'>
					<div className='--text-light'>
						<h3>{mins}</h3>
						<h4>Minutes</h4>
					</div>

					<div>
						<span className='--text-light' style={{ fontSize: 25 }}>
							:
						</span>
					</div>
				</div>

				<div className='--flex-center --gap --py2'>
					<div className='--text-light'>
						<h3>{secs}</h3>
						<h4>Seconds</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default Timer;
