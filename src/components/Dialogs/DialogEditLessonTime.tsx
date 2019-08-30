import React from 'react'
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, TextField,
} from "@material-ui/core";
import {LessonTimeData} from "../../pages/AccountPage";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

interface DialogEditLessonTimeProps {
    editLessonInData: any // cb для добавления
    lessonTime: LessonTimeData[]
}


export class DialogEditLessonTime extends React.Component<DialogEditLessonTimeProps> {

    state = {
        openDialogWindow: false,
        firstLessonStart: this.props.lessonTime[0].lessonStartTime,
        firstLessonFinish: this.props.lessonTime[0].lessonFinishTime,
        secondLessonStart: this.props.lessonTime[1].lessonStartTime,
        secondLessonFinish: this.props.lessonTime[1].lessonFinishTime,
        thirdLessonStart: this.props.lessonTime[2].lessonStartTime,
        thirdLessonFinish: this.props.lessonTime[2].lessonFinishTime,
        fourthLessonStart: this.props.lessonTime[3].lessonStartTime,
        fourthLessonFinish: this.props.lessonTime[3].lessonFinishTime,
        fifthLessonStart: this.props.lessonTime[4].lessonStartTime,
        fifthLessonFinish: this.props.lessonTime[4].lessonFinishTime,
        sixthLessonStart: this.props.lessonTime[5].lessonStartTime,
        sixthLessonFinish: this.props.lessonTime[5].lessonFinishTime,
    };

    public handleOpenLoginDialog = () => {
        this.setState({
            openDialogWindow: true
        })
    };

    public handleClose = () => {
        this.setState({
            openDialogWindow: false,
        })
    };

    public handleLessonNumberChange = (event: any) => {
        this.setState({
            lessonNumber: event.target.value
        })
    };

    public handleLessonNameChange = (event: any) => {
        this.setState({
            lessonName: event.target.value
        })
    };

    public handleLessonTypeChange = (event: any) => {
        this.setState({
            lessonType: event.target.value
        })
    };

    public handleLessonLocationChange = (event: any) => {
        this.setState({
            lessonLocation: event.target.value
        })
    };

    public handleLessonTeacherChange = (event: any) => {
        this.setState({
            lessonTeacher: event.target.value
        })
    };

    public confirmEdit = () => {

    };

    public normalizeLessonTime = (date: string) => {
        let lessonTime = new Date(date).toString().split(' ')[4];  // 9:00:00
        let normalizedLessonTime = lessonTime.split (':'); // ['9'], ['00'], ['00']
        const resultTime = normalizedLessonTime[0] + ':' + normalizedLessonTime[1];
        return (resultTime)
    };

    public handleChangeStartTimeFirst = (date: any) => {
        this.setState({
            firstLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeFirst = (date: any) => {
        this.setState({
            firstLessonFinish: this.normalizeLessonTime(date)
        })
    };

    public handleChangeStartTimeSecond = (date: any) => {
        this.setState({
            secondLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeSecond = (date: any) => {
        this.setState({
            secondLessonFinish: this.normalizeLessonTime(date)
        })
    };

    public handleChangeStartTimeThird = (date: any) => {
        this.setState({
            thirdLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeThird = (date: any) => {
        this.setState({
            thirdLessonFinish: this.normalizeLessonTime(date)
        })
    };

    public handleChangeStartTimeFourth = (date: any) => {
        this.setState({
            fourthLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeFourth = (date: any) => {
        this.setState({
            fourthLessonFinish: this.normalizeLessonTime(date)
        })
    };

    public handleChangeStartTimeFifth = (date: any) => {
        this.setState({
            fifthLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeFifth = (date: any) => {
        this.setState({
            fifthLessonFinish: this.normalizeLessonTime(date)
        })
    };

    public handleChangeStartTimeSixth = (date: any) => {
        this.setState({
            sixthLessonStart: this.normalizeLessonTime(date)
        })
    };

    public handleChangeFinishTimeSixth = (date: any) => {
        this.setState({
            sixthLessonFinish: this.normalizeLessonTime(date)
        })
    };


    public render() {
        return (
            <div>
                <Button color="primary" onClick={this.handleOpenLoginDialog} style={{marginLeft: '1rem'}}>
                    Изменить время занятий
                </Button>
                <MuiPickersUtilsProvider utils={MomentUtils} >

                <Dialog open={this.state.openDialogWindow} onClose={this.handleClose}
                        aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Изменить время занятий</DialogTitle>

                    <DialogContent>
                        <div style={{display: 'flex'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>1</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.firstLessonStart.split(':')[0].length === 1 ? '0' + this.state.firstLessonStart : this.state.firstLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeFirst}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.firstLessonFinish.split(':')[0].length === 1 ? '0' + this.state.firstLessonFinish : this.state.firstLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeFirst}
                                style={{width: '100px'}}
                            />
                        </div>
                        <div style={{display: 'flex', marginTop: '0.5rem'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>2</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.secondLessonStart.split(':')[0].length === 1 ? '0' + this.state.secondLessonStart : this.state.secondLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeSecond}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.secondLessonFinish.split(':')[0].length === 1 ? '0' + this.state.secondLessonFinish : this.state.secondLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeSecond}
                                style={{width: '100px'}}
                            />
                        </div>
                        <div style={{display: 'flex', marginTop: '0.5rem'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>3</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.thirdLessonStart.split(':')[0].length === 1 ? '0' + this.state.thirdLessonStart : this.state.thirdLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeThird}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.thirdLessonFinish.split(':')[0].length === 1 ? '0' + this.state.thirdLessonFinish : this.state.thirdLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeThird}
                                style={{width: '100px'}}
                            />
                        </div>
                        <div style={{display: 'flex', marginTop: '0.5rem'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>4</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.fourthLessonStart.split(':')[0].length === 1 ? '0' + this.state.fourthLessonStart : this.state.fourthLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeFourth}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.fourthLessonFinish.split(':')[0].length === 1 ? '0' + this.state.fourthLessonFinish : this.state.fourthLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeFourth}
                                style={{width: '100px'}}
                            />
                        </div>
                        <div style={{display: 'flex', marginTop: '0.5rem'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>5</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.fifthLessonStart.split(':')[0].length === 1 ? '0' + this.state.fifthLessonStart : this.state.fifthLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeFifth}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.fifthLessonFinish.split(':')[0].length === 1 ? '0' + this.state.fifthLessonFinish : this.state.fifthLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeFifth}
                                style={{width: '100px'}}
                            />
                        </div>
                        <div style={{display: 'flex', marginTop: '0.5rem'}}>
                            <Avatar style={{backgroundColor: 'rgba(74, 144, 226, 1)', fontSize: '0.95rem'}}>6</Avatar>
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.sixthLessonStart.split(':')[0].length === 1 ? '0' + this.state.sixthLessonStart : this.state.sixthLessonStart}` + ':00'}
                                onChange={this.handleChangeStartTimeSixth}
                                style={{width: '100px', marginLeft: '1rem'}}
                            />
                            <KeyboardTimePicker
                                ampm={false}
                                variant="inline"
                                label="Начало"
                                value={'2018-01-01T' + `${this.state.sixthLessonFinish.split(':')[0].length === 1 ? '0' + this.state.sixthLessonFinish : this.state.sixthLessonFinish}` + ':00'}
                                onChange={this.handleChangeFinishTimeSixth}
                                style={{width: '100px'}}
                            />
                        </div>
                    </DialogContent>

                    <DialogActions>

                        <Button onClick={this.confirmEdit} color="primary">
                            Сохранить
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                    </DialogActions>
                </Dialog>
                </MuiPickersUtilsProvider>

            </div>
        )
    }
}
