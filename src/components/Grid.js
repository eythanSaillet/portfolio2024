import { useRef } from "react"
import styled from "styled-components"
import gsap, { Power2 } from "gsap"

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: var(--black);
	overflow: hidden;
	cursor: none;

	.cursor {
		width: 0;
		height: 0;
		position: absolute;
		top: -100px;
		left: -100px;
		z-index: 1000;
		mix-blend-mode: difference;
		.line {
			position: absolute;
			left: -15px;
			width: 30px;
			height: 2px;
			background: var(--white);
		}
		.line1 {
			transform: rotate(45deg);
		}
		.line2 {
			transform: rotate(-45deg);
		}
	}
	.gridCross {
		width: 0;
		height: 0;
		position: absolute;
		z-index: 500;
		.line {
			position: absolute;
			left: -15px;
			width: 30px;
			height: 0.5px;
			background: var(--white);
		}
		.line2 {
			transform: rotate(90deg);
		}
	}
	.gridCross1 {
		top: calc(100vh / 3 - 1px);
		left: calc(100vw / 3 - 0.5px);
	}
	.gridCross2 {
		top: calc(100vh / 3 * 2 - 1px);
		left: calc(100vw / 3 - 0.5px);
	}
	.gridCross3 {
		top: calc(100vh / 3 - 1px);
		left: calc(100vw / 3 * 2 - 0.5px);
	}
	.gridCross4 {
		top: calc(100vh / 3 * 2 - 1px);
		left: calc(100vw / 3 * 2 - 0.5px);
	}

	.overlayGrid {
		width: 100vw;
		height: 100vh;
		position: absolute;
		.row {
			> div {
				position: relative;
			}
			> div > .fade {
				position: absolute;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.6);
			}
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
			font-size: 11px;
			letter-spacing: 3px;
			position: relative;
			.gradient {
				position: absolute;
				width: 100%;
				height: 100%;
				background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
			}
			.cell1 {
				position: relative;
				.title {
					position: absolute;
					top: 35px;
					right: 50px;
				}
			}
			.cell2 {
				position: relative;
				.index {
					position: absolute;
					top: 35px;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.cell3 {
				position: relative;
				.contact {
					position: absolute;
					top: 35px;
					left: 50px;
				}
			}
		}
		div > .cell1 {
			.gradient {
				position: absolute;
				width: 100%;
				height: 100%;
				background: linear-gradient(-80deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
			}
		}
		div:not(.row1) > .cell1 {
			position: relative;
			font-size: 22px;
			line-height: 29px;
			letter-spacing: 5px;
			text-align: right;
			span {
				position: absolute;
				top: 45px;
				right: 50px;
			}
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
				display: flex;
				justify-content: center;
				align-items: center;
				.content {
					width: calc(100% - 50px);
					height: calc(100% - 50px);
					background: darkgrey;
				}
			}
		}
	}
`

function Grid() {
	const contentGrid = useRef()
	const isMoving = useRef(false)
	const cursor = useRef()
	const cursorLine1 = useRef()
	const cursorLine2 = useRef()

	// Direction buttons
	const rightButton = useRef()
	const leftButton = useRef()
	const upButton = useRef()
	const downButton = useRef()
	const upLeftButton = useRef()
	const upRightButton = useRef()
	const downLeftButton = useRef()
	const downRightButton = useRef()

	const adaptCursor = (pos, orientation) => {
		switch (pos) {
			case "center":
				gsap.to(cursorLine1.current, { duration: 0.5, x: 0, y: 0, ease: Power2.easeOut })
				gsap.to(cursorLine2.current, { duration: 0.5, x: 0, y: 0, ease: Power2.easeOut })
				break
			case "left":
				gsap.to(cursorLine1.current, { duration: 0.5, x: 0, y: "10px", ease: Power2.easeOut })
				gsap.to(cursorLine2.current, { duration: 0.5, x: 0, y: "-10px", ease: Power2.easeOut })
				break
			case "right":
				gsap.to(cursorLine1.current, { duration: 0.5, x: 0, y: "-10px", ease: Power2.easeOut })
				gsap.to(cursorLine2.current, { duration: 0.5, x: 0, y: "10px", ease: Power2.easeOut })
				break
			case "up":
				gsap.to(cursorLine1.current, { duration: 0.5, x: "10px", y: 0, ease: Power2.easeOut })
				gsap.to(cursorLine2.current, { duration: 0.5, x: "-10px", y: 0, ease: Power2.easeOut })
				break
			case "down":
				gsap.to(cursorLine1.current, { duration: 0.5, x: "-10px", y: 0, ease: Power2.easeOut })
				gsap.to(cursorLine2.current, { duration: 0.5, x: "10px", y: 0, ease: Power2.easeOut })
				break
			default:
				break
		}
		switch (orientation) {
			case 1:
				gsap.to(cursor.current, { duration: 0.5, rotation: -45, ease: Power2.easeOut })
				break
			case 0:
				gsap.to(cursor.current, { duration: 0.5, rotation: 0, ease: Power2.easeOut })
				break
			case -1:
				gsap.to(cursor.current, { duration: 0.5, rotation: 45, ease: Power2.easeOut })
				break
			default:
				break
		}
	}

	return (
		<Container
			onMouseMove={(e) => {
				cursor.current.style.top = e.clientY + "px"
				cursor.current.style.left = e.clientX + "px"
			}}
		>
			<div className="cursor" ref={cursor}>
				<div className="line line1" ref={cursorLine1}></div>
				<div className="line line2" ref={cursorLine2}></div>
			</div>
			<div className="gridCross gridCross1">
				<div className="line line1"></div>
				<div className="line line2"></div>
			</div>
			<div className="gridCross gridCross2">
				<div className="line line1"></div>
				<div className="line line2"></div>
			</div>
			<div className="gridCross gridCross3">
				<div className="line line1"></div>
				<div className="line line2"></div>
			</div>
			<div className="gridCross gridCross4">
				<div className="line line1"></div>
				<div className="line line2"></div>
			</div>
			<div className="contentGrid" ref={contentGrid}>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell">
						<div className="content"></div>
					</div>
					<div className="cell">
						<div className="content"></div>
					</div>
					<div className="cell">
						<div className="content"></div>
					</div>
					<div className="cell">
						<div className="content"></div>
					</div>
					<div className="cell">
						<div className="content"></div>
					</div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
			</div>
			<div className="overlayGrid">
				<div className="row row1">
					<div className="gradient"></div>
					<div
						className="cell1"
						ref={upLeftButton}
						onMouseEnter={() => {
							adaptCursor("left", -1)
						}}
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
					>
						<div className="gradient"></div>
						<div className="fade"></div>
						<span className="title">EYTHAN SAILLET</span>
					</div>
					<div className="colLine line1"></div>
					<div
						className="cell2"
						ref={upButton}
						onMouseEnter={() => {
							adaptCursor("up", 0)
						}}
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
					>
						<div className="fade"></div>
						<span className="index">01 / 13</span>
					</div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={upRightButton}
						onMouseEnter={() => {
							adaptCursor("right", 1)
						}}
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
					>
						<div className="fade"></div>
						<span className="contact">CONTACT</span>
					</div>
				</div>
				<div className="rowLine line1"></div>
				<div className="row row2">
					<div
						className="cell1"
						ref={leftButton}
						onMouseEnter={() => {
							adaptCursor("left", 0)
						}}
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
					>
						<div className="gradient"></div>
						<div className="fade"></div>
						<span>
							ARTISTIC
							<br />
							DIRECTION
						</span>
					</div>
					<div className="colLine line1"></div>
					<div
						className="cell2"
						onMouseEnter={() => {
							adaptCursor("center", 0)
						}}
					></div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={rightButton}
						onMouseEnter={() => {
							adaptCursor("right", 0)
						}}
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
					>
						<div className="fade"></div>
					</div>
				</div>
				<div className="rowLine line2"></div>
				<div className="row row3">
					<div
						className="cell1"
						ref={downLeftButton}
						onMouseEnter={() => {
							adaptCursor("left", 1)
						}}
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
					>
						<div className="fade"></div>
						<div className="gradient"></div>
						<span>
							3D
							<br />
							MOTION
						</span>
					</div>
					<div className="colLine line1"></div>
					<div
						className="cell2"
						ref={downButton}
						onMouseEnter={() => {
							adaptCursor("down", 0)
						}}
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
					>
						<div className="fade"></div>
					</div>
					<div className="colLine line2"></div>
					<div
						className="cell3"
						ref={downRightButton}
						onMouseEnter={() => {
							adaptCursor("right", -1)
						}}
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
					>
						<div className="fade"></div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Grid
