import React, { Component } from 'react'
import Writeinbooknavbar from './Writeinbooknavbar'

class writein_ebook extends Component {
    render() { 
        return (         
        <div className="writeinbook">
        <Writeinbooknavbar />
        <div className="sell">
            <a id="lend" href="/Borrow">کتاب الکترونیک</a>
        </div>
        <div className="wibook-form">
            <fieldset class="fieldset">
                <legend className="legend">لطفا اطالاعات کتاب را وارد کنید</legend>
                <form action="">

                <label id="label" htmlFor="name" >نام کتاب</label><br/>
                <input type="text" name="wi-form" id="name" required placeholder="نام خود را وارد کنید" autocomplete="off"/><br/>
                <label id="label" htmlFor="author">نام نویسنده</label><br/>
                <input type="text" name="wi-form" id="author" placeholder="نام نویسنده را وارد کنید" autocomplete="off" /><br/>
                <label id="label" htmlFor="category">دسته بندی</label><br/>
                <select name="wi-form" id="category" placeholder="دسته بندی را انتخاب کنید">
                    <option value=""></option>
                    <option value="">تاریخی</option>
                    <option value="">سیاسی</option>
                    <option value="">علمی</option>
                </select><br/>
                <label id="label" htmlFor="price">قیمت</label><br/>
                <input type="number" name="wi-form" id="price" required placeholder="قیمت را وارد کنید" autocomplete="off" /><br/>
                <label id="label" htmlFor="e-book">کتاب الکترونیکی</label><br/>
                <input type="file" name="wi-form" id="e-book" accept="pdf/*"/><br/>
                <label id="label" htmlFor="s-book">کتاب صوتی</label><br/>
                <input type="file" name="wi-form" id="e-book" accept="mp3/*"/><br/>   
                <textarea name="wi-book" id="textarea" cols="40" rows="5" placeholder="توضیحات">
                </textarea>   <br/>             

                <input type="submit" value="آپلود" id="form-submit"/>

            </form>                    
            </fieldset>
        </div>
        <br/><br/><br/><br/><br/><br/>            
    </div>    
    );
    }
}
 
export default writein_ebook;