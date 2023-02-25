import { useRef } from "react"
import styled from "styled-components"
import gsap, { Power2 } from "gsap"

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: red;
	overflow: hidden;
	.overlayGrid {
		width: 100vw;
		height: 100vh;
		position: absolute;
		.row {
			display: flex;
			.cell1 {
				width: calc(100% / 3 - 1px);
				height: 100%;
			}
			.cell2 {
				width: calc(100% / 3 - 1px);
				height: 100%;
			}
			.cell3 {
				width: calc(100% / 3);
				height: 100%;
			}
			.colLine {
				width: 1px;
				height: 100%;
				background: var(--lightBlack);
			}
		}
		.row1 {
			width: 100vw;
			height: calc(100vh / 3 - 1px);
		}
		.row2 {
			width: 100vw;
			height: calc(100vh / 3 - 1px);
		}
		.row3 {
			width: 100vw;
			height: calc(100vh / 3);
		}
		.rowLine {
			width: 100vw;
			height: 1px;
			background: var(--lightBlack);
		}
	}
	.contentGrid {
		width: 100vw;
		height: 100vh;
		position: fixed;

		.row {
			width: 100vw;
			height: calc(100vh / 3);
			display: flex;
			flex-wrap: nowrap;
			.cell {
				min-width: calc(100% / 3);
				width: calc(100% / 3);
				height: 100%;
				background: green;
			}
		}
	}
`

function Grid() {
	const contentGrid = useRef()
	const isMoving = useRef(false)

	// Direction buttons
	const rightButton = useRef()
	const leftButton = useRef()
	const upButton = useRef()
	const downButton = useRef()
	const upLeftButton = useRef()
	const upRightButton = useRef()
	const downLeftButton = useRef()
	const downRightButton = useRef()

	return (
		<Container>
			<div className="contentGrid" ref={contentGrid}>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
			</div>
			<div className="overlayGrid">
				<div className="row row1">
					<div
						className="cell1"
						ref={upLeftButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("upLeft")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "+=" + window.innerHeight / 3,
									x: "+=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
					<div className="colLine line1"></div>
					<div
						className="cell2"
						ref={upButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("up")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "+=" + window.innerHeight / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={upRightButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("upRight")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "+=" + window.innerHeight / 3,
									x: "-=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
				</div>
				<div className="rowLine line1"></div>
				<div className="row row2">
					<div
						className="cell1"
						ref={leftButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("left")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									x: "+=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
					<div className="colLine line1"></div>
					<div className="cell2"></div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={rightButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("right")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									x: "-=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
				</div>
				<div className="rowLine line2"></div>
				<div className="row row3">
					<div
						className="cell1"
						ref={downLeftButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("downLeft")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "-=" + window.innerHeight / 3,
									x: "+=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
					<div className="colLine line1"></div>
					<div
						className="cell2"
						ref={downButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("down")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "-=" + window.innerHeight / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={downRightButton}
						onClick={() => {
							if (!isMoving.current) {
								console.log("downRight")
								gsap.to(contentGrid.current, {
									duration: 0.7,
									y: "-=" + window.innerHeight / 3,
									x: "-=" + window.innerWidth / 3,
									ease: Power2.easeInOut,
									onComplete: () => {
										isMoving.current = false
									},
								})
							}
							isMoving.current = true
						}}
					></div>
				</div>
			</div>
		</Container>
	)
}

export default Grid
