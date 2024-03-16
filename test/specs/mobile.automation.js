describe('Open Application', () => {
    it('Should input form with valid data', async () =>{
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']").setValue('Sari');
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").setValue('40');
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']").setValue('155');
        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_female']").click();
        // await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']").click();

        await $("//android.widget.Button").click();

        // Wait for the next page to load
        await browser.pause(5000);

        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_rest']").click();
        await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_finish']").click();


         // Verify the presence of the text
         const textView = await $("//android.widget.TextView[@resource-id='com.fghilmany.dietmealapp:id/tv_header_desc']");
         const text = await textView.getText();
         expect(text).toEqual("Ready to some calories today?")
        
    })
})