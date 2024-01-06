package Exp5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.*;

public class crudops {
    public static void main(String[] args) throws ClassNotFoundException, SQLException, IOException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/rish","root","root");
        PreparedStatement st = con.prepareStatement("insert into emp values(?,?,?,?)");
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        do{
            System.out.print("Enter id: ");
            int id = Integer.parseInt(br.readLine());
            st.setInt(1,id);
            System.out.print("Enter Name: ");
            String name = br.readLine();

            st.setString(2,name);
            System.out.print("Enter designation:");
            String designation = br.readLine();
            st.setString(3,designation);
//            System.out.print("Enter Age:");
//            int age = Integer.parseInt(br.readLine());
//            st.setInt(4,age);
            System.out.print("Enter Salary:");
            int salary = Integer.parseInt(br.readLine());
            st.setInt(4,salary);
            st.executeUpdate();
            System.out.println("Do you want to continue: y/n");
            String s = br.readLine();

            if(s.startsWith("n")) break;
        }while(true);

        PreparedStatement st2 = con.prepareStatement("Delete from emp WHERE id = ?");
        System.out.print("Enter id TO delete: ");
        int id = Integer.parseInt(br.readLine());
        st2.setInt(1,id);
        st2.executeUpdate();
        System.out.println("Record Deleted Successfully");
        st2.close();

        
        
        PreparedStatement st3 = con.prepareStatement("select * from emp");
        ResultSet res = st3.executeQuery();
        
        
        PreparedStatement st4=con.prepareStatement("select * from emp where salary>25000");

        ResultSet rs=st4.executeQuery();

        while(rs.next())

        System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getString(3)+"\t"+rs.getInt(4));

        //int a=st.executeUpdate("update employee set salary=35000 where salary<25000");

        //int a=st.executeUpdate("update employee set salary=24000 where salary=35000");

        //System.out.println(a+" records affected");
        System.out.println("id\tname\tdesignation\tsalary\t");
        while(res.next()){
            System.out.println(res.getInt(1)+"\t"+res.getString(2)+"\t"+res.getString(3)+"\t"+"\t"+res.getInt(4));
        }
        st3.close();

        st.close();
        con.close();
    }
}